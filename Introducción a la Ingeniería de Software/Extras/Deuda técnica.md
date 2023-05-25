Los sistemas informáticos son propensos a acumular **cruft**, es decir, deficiencias de calidad interna que dificultan más de lo ideal la modificación y ampliación del sistema.

La deuda técnica es una metáfora, acuñada por Ward Cunningham, que enmarca la forma de abordar este problema, como si se tratara de una deuda financiera. El esfuerzo adicional que supone añadir nuevas funciones es el interés que se paga por la deuda.

![[Pasted image 20230525143426.png]]

- Limpiar el código y eliminar la basura es como pagar el principal de una deuda.
- Al principio, limpiar el código puede llevar más tiempo, pero a la larga puede suponer un ahorro.
- Medir objetivamente los costes y beneficios de la eliminación de "cruft" es difícil, por lo que es necesario hacer estimaciones.
- El autor sugiere amortizar gradualmente el principal asignando tiempo extra a la eliminación de cruft en la primera función.
- Este planteamiento ayuda a reducir los costes futuros y mejora la eficacia de futuros cambios.
- La mejora gradual se centra en eliminar cruft en las áreas que sufren modificaciones frecuentes, que son las que más lo necesitan.
- La metáfora de la deuda ayuda a decidir qué cruft hay que abordar en el desarrollo de software.
- Las zonas estables del código que no se modifican con frecuencia pueden dejarse tranquilas, ya que no generan pagos de intereses.
- Las áreas de alta actividad requieren una actitud de tolerancia cero hacia el cruft debido al alto coste del pago de intereses.
- A veces se justifica descuidar la calidad interna utilizando la metáfora de la deuda, aceptando la deuda por las nuevas características urgentes.
- Sin embargo, este enfoque a menudo conduce a una entrega más lenta y al agotamiento de las tarjetas de crédito, ya que el impacto del cruft afecta a las nuevas características.
- Asumir una deuda para acelerar la entrega sólo funciona si se mantiene por debajo de la línea de pago del diseño y se resuelve en cuestión de semanas.
- Existen debates sobre si los distintos tipos de cruft deben considerarse deuda, lo que ha dado lugar al concepto de Cuadrante de Deuda Técnica.
