---
title: "Random video loss in CCTV security cameras and how I solved it"
pubDate: 2021-11-12
description: "Troubleshooting a year-long intermittent video loss issue across a CCTV network, tracked down to two combined root causes."
lang: en
---

**Situation:**
While working for a former employer, every once in a while, a multi-disciplinary team would be created on the spot with the solely goal of solving a specific and complex problem. In this case, I was asked to be a part of that team.

This problem was affecting security cameras of multiple sites within a region, causing gaps of missing video in security footage, which is a far from ideal situation. It had been happening for almost a year, CCTV administrators couldn't solve the issue, there was no apparent cause, so they reached out for help.

Security cameras were connected to an Ethernet network and video recording software ran on physical Windows Servers. The video recording service would restart unexpectedly.

**Task:**
The goal here was to understand and fix this video loss issue so that security cameras would record video normally, meaning 24 hours, 7 days a week without losing any data.

**Action:**
I started by gathering information that would help me pinpoint the root cause. First I looked for the Windows Event Logs, and found these type of events in the Application Log:

```
1000,ERROR,Application Error,Tue Sep 26 14:27:04 20XX,No User,Faulting application name: LnrRetrSvcu.exe, version: 7.1.1027.0, Faulting module name: MSVCR100.dll, version: 10.0.40219.1, Exception code: 0x40000015

1000,ERROR,Application Error,Tue Sep 26 14:42:52 20XX,No User,Faulting application name: LnrCapSvcu.exe, version: 7.1.1027.0, Faulting module name: UTCH264DecDMO.dll, version: 7.1.1027.0, Exception code: 0xc0000005
```

Then I used the **EventCombMT** tool, that allows you to search, filter and collect events from the Event Viewer in multiple servers, to collect all these type of events from all the CCTV servers.

So, basically I got two type of events here, one indicating a crash related to the H264 codec and other related to the Microsoft Visual C++ runtime. **96% of the crashes were related to the H264 DLL**.

![Application log events showing H264 DLL crashes](/images/blog/random-video-loss-in-cctv-security-cameras-and-how-i-solved-it/image-4.png)

I managed to take a memory dump of the process during one of these crashes. A quick look at the crash shows that it is referencing the H264 DLL as well.

![Memory dump referencing the H264 DLL](/images/blog/random-video-loss-in-cctv-security-cameras-and-how-i-solved-it/image-7.png)

I was also able to capture a network trace during one of these crashes, this is what it looked like. We can clearly see the gap in data transfer, which lasts around 1 minute until it "comes back to normal". Why the quotes? Because it would crash again in a couple of minutes, so the service was not really normalized yet.

![Network trace showing a gap in data transfer](/images/blog/random-video-loss-in-cctv-security-cameras-and-how-i-solved-it/image-9-1024x364.png)

Using **Wireshark's Expert Information** tool, I was able to see multiple "**Illegal characters found in header name**" errors in HTTP packets coming from the cameras into the servers.

![Wireshark Expert Information showing illegal header errors](/images/blog/random-video-loss-in-cctv-security-cameras-and-how-i-solved-it/image-14.png)

This is the content of one of the HTTP packets with illegal characters. At first sight it looks like some sort of data corruption. Important to note that only a subset of the cameras were sending these packets. All of them, being of the same brand and model (**Sony CH-160**).

![HTTP packet contents showing data corruption](/images/blog/random-video-loss-in-cctv-security-cameras-and-how-i-solved-it/image-15.png)

=> **So, the first thing I asked the CCTV team to do, was to disable H264 codec in the video recording software. This stopped the video recording software from crashing.** BUT, using MPEG was taking too much disk space, so it wasn't an option. After making sure that changing from H264 to MPEG stopped the crashes, I asked the CCTV team to enable H264 only for the cameras that were not sending the "garbage" HTTP packets. After doing this the software kept working OK.

=> **Then, whenever any of the Sony CH-160 cameras was configured to use the H264 codec, the crashes would come back.**

=> **The problem was a combination between using H264 codec in recording software and using Sony CH-160 cameras.** So the root cause of this issue wasn't just one, but a combination of two root causes! Both the recording software AND a specific camera model and brand.

**Result:**
Finding the root cause of this issue allowed the company to solve the missing security footage problem, which was a security threat that lasted for about a year and caused many headaches to the CCTV team.

My takeaway here is, never think that there is a single root cause for any one problem! You might have a combination of two or more root causes at the same time. We always need to account for that possibility in our reasoning while diagnosing and troubleshooting.
