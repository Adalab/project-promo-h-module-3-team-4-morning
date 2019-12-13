#PASOS A SEGUIR ANTES DE MERGEAR
1º Desde tu rama
-Hacer un git add -A
-Hacer un git commit -m ""
-Hacer un git push origin rama

2º Hay que cambiarse a Master
-git checkout master
-git pull

3º Volvemos a cambiar a nuestra rama (Vamos a mergear en nuestra rama con Master)
-git checkout rama
-git merge master
-git push origin rama

4º Ahora mergeamos a Master
-git checkout master
-git merge rama
-git push 


Somos el equipo 4 y vamos a crear una web de tarjetas personalizadas
Su estructura se basa en: una primera página de html o landing que accede a una segunda página de personalización de las tarjetas.
