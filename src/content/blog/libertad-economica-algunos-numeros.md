---
title: "Libertad económica: algunos números"
pubDate: 2020-12-26
description: "Poniendo a prueba la frase de Milton Friedman sobre libertad e igualdad, cruzando el Índice de Libertad Económica con el Coeficiente de Gini, el PBI per cápita, la expectativa de vida y el IDH."
lang: es
---

> La sociedad que antepone la igualdad a la libertad no tendrá ninguna de las dos. La sociedad que antepone la libertad a la igualdad terminará con una gran cantidad de ambas.
>
> — **Milton Friedman**. Free to Choose, Episodio 5: "Creados iguales".

**¿Podemos poner a prueba esta frase?** De ser cierta, deberíamos poder encontrar evidencia de que a medida que las sociedades obtienen un mayor grado de libertad, la desigualdad disminuye.

Pero primero, tenemos que definir qué son la libertad y la desigualdad y cómo se pueden medir, para analizar si es posible compararlas e intentar hallar alguna relación entre ellas.

---

**Libertad**: Milton Friedman se refiere al concepto de libertad económica expuesto por Adam Smith en su libro "La Riqueza de Las Naciones", el cual considera a la libertad económica como el derecho fundamental de cada individuo de controlar su propia labor y propiedad.

Se refiere al grado en el cual los individuos en una sociedad son libres de trabajar, producir, consumir e invertir en lo que quieran y de la forma que a ellos les parezca mejor. En estas sociedades los gobiernos permiten que el trabajo, el capital y los bienes se muevan libremente y se rehúsan a restringir libertades salvo que sea necesario para resguardar la libertad en sí misma.

Para medirla, vamos a usar el Índice de Libertad Económica que genera [heritage.org](https://www.heritage.org/index/about), que está alineado con ese enfoque y mide la libertad económica teniendo en cuenta 12 factores distintos: el grado en el cual se respeta la propiedad privada, la efectividad de la justicia, la integridad del gobierno, la carga impositiva, el gasto público, la salud fiscal, la libertad para hacer negocios, la libertad para trabajar, la libertad monetaria, la libertad para exportar/importar, libertad para invertir y la libertad financiera. Cuanto mayor es el valor del Índice de Libertad Económica, más libertad económica existe en ese país, según los criterios mencionados arriba.

Vemos como ejemplo los primeros 10 países según este índice.

![Ranking de países según el Índice de Libertad Económica](/images/blog/libertad-economica-algunos-numeros/image.png)
*[Índice de Libertad Económica — Wikipedia](https://en.wikipedia.org/wiki/Index_of_Economic_Freedom)*

---

**Igualdad**: Milton Friedman diferencia tres tipos de igualdad. La igualdad ante la ley, la igualdad de oportunidades y la igualdad de resultados. Él afirma que las primeras dos son consistentes con una sociedad libre y justa; sin embargo, la igualdad de resultados no puede garantizarse de ninguna forma y todo intento de lograr implementarla, terminaría inevitablemente en el uso de la fuerza o amenaza de fuerza, por lo tanto, disminuiría la libertad de las personas.

Para intentar medirla vamos a utilizar el Coeficiente de Gini que publica el [Banco Mundial](https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false) y mide la desigualdad de los ingresos en una sociedad. El valor de cero (0) se corresponde con la perfecta igualdad (todos tienen los mismos ingresos) y el valor de cien (100) se corresponde con la perfecta desigualdad (una sola persona tiene todos los ingresos y los demás no tienen ningún ingreso).

Vemos como ejemplo los primeros 10 países con menor desigualdad de ingresos según este coeficiente.

![Ranking de países según el Coeficiente de Gini](/images/blog/libertad-economica-algunos-numeros/image-1.png)
*[Banco Mundial — Coeficiente de Gini](https://data.worldbank.org/indicator/SI.POV.GINI?most_recent_value_desc=false)*

---

**Análisis**: si cruzamos ambos conjuntos de datos y los graficamos lado a lado por país, ordenados de menor a mayor en cuanto a libertad económica, obtenemos el siguiente gráfico.

En azul vemos el Índice de Libertad Económica, en naranja el Coeficiente Gini y en verde rayado la línea de tendencia del Coeficiente Gini (que usamos para reducir el ruido, excluir "outliers" o valores atípicos y/o errores en el conjunto de datos).

![Gráfico comparando el Índice de Libertad Económica y el Coeficiente Gini por país](/images/blog/libertad-economica-algunos-numeros/image-5.png)
*Regresión polinomial del Coeficiente de Gini en verde con pendiente negativa.*

Se observa que a medida que aumenta la libertad económica de un país, el Coeficiente Gini tiende a decrecer, es decir, tiende a disminuir la desigualdad de ingresos de ese país.

En este caso vemos que el coeficiente disminuye de 45 a 35 (una reducción aproximada del 22%) en la desigualdad entre el país con menos libertad económica y el país con más libertad económica.

Otra forma de analizar si existe alguna correlación entre estos dos conjuntos de datos, es calculando el Coeficiente de Correlación de Pearson entre los dos conjuntos de datos, usando la función de Excel CORREL.

Esta función nos devolverá un valor entre -1 y 1 indicando el grado de correlación entre los dos conjuntos de datos.

En este caso nos da: **-0,30**.

![Cálculo del coeficiente de correlación de Pearson](/images/blog/libertad-economica-algunos-numeros/image-8.png)

![Cálculo del coeficiente de correlación de Pearson, continuación](/images/blog/libertad-economica-algunos-numeros/image-9.png)

![Cálculo del coeficiente de correlación de Pearson, resultado](/images/blog/libertad-economica-algunos-numeros/image-10.png)

Al ser negativo este coeficiente, nos indica que existe una relación inversa (cuando una variable crece, la otra disminuye), con lo cual verificamos lo observado en el gráfico anterior.

Calidad de la correlación según el valor obtenido de R:

![Tabla de referencia de calidad de correlación según R](/images/blog/libertad-economica-algunos-numeros/image-11.png)
*Ejemplo de valores de coeficiente de correlación de Pearson*

---

**Conclusiones:**

De los datos obtenidos observamos que entre el grado de libertad económica y el Coeficiente Gini de un país existe una correlación inversamente proporcional **leve**.

Se observa la correlación inversamente proporcional entre la libertad y la desigualdad, tal como Friedman lo postula.

El grado de correlación **leve** se condice con la parte de la frase que indica que las sociedades libres acabarán con "una buena cantidad" de tanto libertad como igualdad.

Poniendo énfasis en que una sociedad libre no elimina por completo la desigualdad pero que termina siendo menos desigual que las sociedades que ponen foco en la igualdad y que terminan sin libertad ni igualdad.

---

<nav class="return-nav return-nav--middle" aria-label="Article navigation" lang="en">
  <a href="/blog/">← Back to writing</a>
</nav>

**Comparación con otros índices:** Índice de Libertad Económica vs. PBI per Cápita vs. Expectativa de Vida vs. Índice de Desarrollo Humano

Como ya estaba haciendo gráficos, decidí comparar el Índice de Libertad Económica con otras variables, como por ejemplo contra el PBI per Cápita.

En verde vemos la línea de tendencia del PBI per Cápita, que **aumenta exponencialmente** a medida que crece la libertad económica en un país, que apenas se ve en el gráfico por la escala lineal.

![Gráfico del Índice de Libertad Económica vs. PBI per Cápita](/images/blog/libertad-economica-algunos-numeros/image-12.png)
*Regresión exponencial del PBI per Cápita en verde, con pendiente positiva.*

Para reducir el efecto de los valores altos en el gráfico anterior, mostramos la misma información con una escala logarítmica en el próximo gráfico y se puede observar mejor la correlación positiva entre el grado de libertad económica y el PBI per Cápita de un país.

![Gráfico del Índice de Libertad Económica vs. PBI per Cápita en escala logarítmica](/images/blog/libertad-economica-algunos-numeros/image-13.png)
*Regresión exponencial del PBI per Cápita en verde, con pendiente positiva (escala logarítmica).*

En este caso, el coeficiente de correlación de Pearson nos da: **0,64**.

![Cálculo del coeficiente de correlación de Pearson para PBI per Cápita](/images/blog/libertad-economica-algunos-numeros/image-14.png)

![Cálculo del coeficiente de correlación de Pearson para PBI per Cápita, continuación](/images/blog/libertad-economica-algunos-numeros/image-15.png)

![Cálculo del coeficiente de correlación de Pearson para PBI per Cápita, resultado](/images/blog/libertad-economica-algunos-numeros/image-16.png)

Lo que indica una correlación directamente proporcional **moderada**.

---

Si comparamos el Índice de Libertad Económica con la expectativa de vida promedio de las personas para un determinado país, también vemos que existe una correlación directamente proporcional **moderada**.

En verde vemos la línea de tendencia de la expectativa de vida y vemos que aumenta a medida que aumenta la libertad económica.

Pasamos de una expectativa de vida menor a 70 años en los países menos libres económicamente a más de 80 años en los países **más libres económicamente**.

![Gráfico del Índice de Libertad Económica vs. expectativa de vida](/images/blog/libertad-economica-algunos-numeros/image-17.png)
*Regresión polinomial de la expectativa de vida en verde, con pendiente positiva.*

En este caso, el coeficiente de correlación nos da: **0,68**.

![Cálculo del coeficiente de correlación de Pearson para expectativa de vida](/images/blog/libertad-economica-algunos-numeros/image-18.png)

![Cálculo del coeficiente de correlación de Pearson para expectativa de vida, continuación](/images/blog/libertad-economica-algunos-numeros/image-20.png)

![Cálculo del coeficiente de correlación de Pearson para expectativa de vida, resultado](/images/blog/libertad-economica-algunos-numeros/image-19.png)

---

Por último, si comparamos el Índice de Libertad Económica con el [Índice del Desarrollo Humano](https://es.wikipedia.org/wiki/%C3%8Dndice_de_desarrollo_humano) (que incluye factores como salud, educación y riqueza), vemos que también existe una correlación directamente proporcional **moderada**. En este caso nos da: **0,73**, la correlación más fuerte de las analizadas.

![Gráfico del Índice de Libertad Económica vs. Índice de Desarrollo Humano](/images/blog/libertad-economica-algunos-numeros/image-21.png)

![Cálculo del coeficiente de correlación de Pearson para IDH](/images/blog/libertad-economica-algunos-numeros/image-22.png)

![Cálculo del coeficiente de correlación de Pearson para IDH, continuación](/images/blog/libertad-economica-algunos-numeros/image-23.png)

![Cálculo del coeficiente de correlación de Pearson para IDH, resultado](/images/blog/libertad-economica-algunos-numeros/image-24.png)

**Conclusión Final:**

Vemos que la diferencia entre vivir en el país menos y el más libre económicamente, le puede representar a un individuo vivir en una sociedad con un ~20% menos de desigualdad, ~10 años más de expectativa de vida, un salario anual ~10 veces mayor y una mejora en su calidad de vida en un ~20% (según el Índice del Desarrollo Humano).

**No me parece que sean números despreciables, sino todo lo contrario, me parece que son números que vale la pena comunicar y por la magnitud de los mismos y las posibles implicancias -lo que está en juego-, son números que, por lo menos, hay que considerarlos o tenerlos en cuenta.**

---

**Nota de la metodología:** cabe aclarar que estadísticamente, la correlación no necesariamente implica causalidad. Que exista correlación entre dos variables, por más fuerte que esta correlación sea, no siempre implica que una causa a la otra.

Aunque no siempre implique causalidad, la correlación muchas veces es un buen indicador de una relación causal, de hecho es condición necesaria de la causalidad, pero no suficiente.

En este caso, los números parecen acompañar los postulados teóricos mencionados.

---

**Fuentes**:

Planilla con los datos: [https://1drv.ms/x/s!AlWNpq1U9FaFi0BLRgZ1gH2rEI06?e=EWRce0](https://1drv.ms/x/s!AlWNpq1U9FaFi0BLRgZ1gH2rEI06?e=EWRce0)

- [https://en.wikiquote.org/wiki/Milton_Friedman](https://en.wikiquote.org/wiki/Milton_Friedman)
- [https://en.wikipedia.org/wiki/Index_of_Economic_Freedom](https://en.wikipedia.org/wiki/Index_of_Economic_Freedom)
- [https://miltonfriedman.hoover.org/objects/52412/equality-and-freedom-in-the-free-enterprise-system](https://miltonfriedman.hoover.org/objects/52412/equality-and-freedom-in-the-free-enterprise-system)
- [https://data.worldbank.org/indicator/SI.POV.GINI](https://data.worldbank.org/indicator/SI.POV.GINI)
- [https://en.wikipedia.org/wiki/List_of_countries_by_income_equality](https://en.wikipedia.org/wiki/List_of_countries_by_income_equality)
- [https://www.statista.com/statistics/951976/singapore-gini-coefficient-after-tax/](https://www.statista.com/statistics/951976/singapore-gini-coefficient-after-tax/)
- [https://worldpopulationreview.com/country-rankings/gini-coefficient-by-country](https://worldpopulationreview.com/country-rankings/gini-coefficient-by-country)
- [https://www.unescap.org/sites/default/files/Afghanistan-SYB2015.pdf](https://www.unescap.org/sites/default/files/Afghanistan-SYB2015.pdf)
- [http://www.goodsociety.nz/inequality-and-poverty-a-summary-of-the-2019-household-incomes-in-new-zealand-report](http://www.goodsociety.nz/inequality-and-poverty-a-summary-of-the-2019-household-incomes-in-new-zealand-report)
- [https://knoema.com/atlas/Cambodia/GINI-index](https://knoema.com/atlas/Cambodia/GINI-index)
- [https://www.statista.com/statistics/922574/taiwan-gini-index/](https://www.statista.com/statistics/922574/taiwan-gini-index/)
- [https://www.excelavanzado.com/2018/03/regresion-polinomica.html](https://www.excelavanzado.com/2018/03/regresion-polinomica.html)
- [https://blog.minitab.com/es/analisis-de-regresion-como-puedo-interpretar-el-r-cuadrado-y-evaluar-la-bondad-de-ajuste](https://blog.minitab.com/es/analisis-de-regresion-como-puedo-interpretar-el-r-cuadrado-y-evaluar-la-bondad-de-ajuste)
- [https://www.ablebits.com/office-addins-blog/2019/01/23/correlation-excel-coefficient-matrix-graph/](https://www.ablebits.com/office-addins-blog/2019/01/23/correlation-excel-coefficient-matrix-graph/)
- [https://en.wikipedia.org/wiki/Pearson_correlation_coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
- [https://booksite.elsevier.com/9780128017128/chapter1_5.php](https://booksite.elsevier.com/9780128017128/chapter1_5.php)
- [https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita](<https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita>)
- [https://www.worldometers.info/demographics/life-expectancy/](https://www.worldometers.info/demographics/life-expectancy/)
- [http://hdr.undp.org/en/content/download-data](http://hdr.undp.org/en/content/download-data)
- [https://en.wikipedia.org/wiki/Social_Progress_Index](https://en.wikipedia.org/wiki/Social_Progress_Index)
- [https://www.gaussianos.com/hay-que-decirlo-mas-correlacion-implica-causalidad/](https://www.gaussianos.com/hay-que-decirlo-mas-correlacion-implica-causalidad/)
- [https://es.wikipedia.org/wiki/Cum_hoc_ergo_propter_hoc](https://es.wikipedia.org/wiki/Cum_hoc_ergo_propter_hoc)
