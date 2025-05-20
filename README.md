# README

Este es un archivo README para el repositorio. A continuación, se describe el propósito del proyecto, cómo instalarlo y cómo utilizarlo.

# IMPORTANTE

Se le recomienda a usted realizar primero la lectura completa de este archivo antes de seguir cualquier paso mencionado.

# Descripción

Este proyecto consiste en un analizador léxico y sintáctico desarrollado con ANTLR4 y JavaScript (Node.js), basado en una gramática simple. El analizador procesa archivos de texto que contienen un código fuente; lo analiza léxica y sintácticamente e informa si hay errores, genera la tabla de tokens y lexemas correspondiente, construye el árbol sintáctico concreto de la entrada, y traduce el código fuente al lenguaje JavaScript, para luego ejecutarlo.

## Requisitos previos

- Tener instalado *Visual Studio Code* en su computadora para poder ejecutar el código de una manera sencilla, y para poder guiarse con el presente archivo sin tener complicaciones. Si aún no lo tiene instalado, se le recomienda instalar desde la página oficial: https://code.visualstudio.com/.
 *IMPORTANTE:* durante la instalación de VS Code, habilite la opción "Add to PATH" para que
pueda abrir VS Code desde una terminal con `code .`.
- Es necesario que tenga *Node.js* instalado en su sistema, ya que el proyecto esta construído con Node. En caso de no contar con Node instalado, se le recomienda instalarlo desde https://nodejs.org/es. Se requiere la *version 18* o *superior*.
- Es necesario tener *Java (JDK)* instalado en su sistema. Se requiere Java 11 o superior, aunque es recomendable instalar *Java 17* o *superior*.
- Debe instalar *GIT* desde la página oficial: https://git-scm.com/downloads. Éste Le permitirá clonar el repositorio desde VS Code o terminal. 

Para comprobar que está todo bien instalado, puede ejecutar los siguientes comandos en una terminal:
```bash
code -v

node -v

npm -v

java -version

git -v
```
Las respectivas salidas deberían ser:
```bash
versión de Visual Studio Code instalada
Ej.: 1.96.4
cd4ee3b1c348a13bafd8f9ad8060705f6d4b9cba
x64

versión de Node JS instalada
Ej.: v20.10.0 

versión de NPM instalada
Ej.: 10.2.3

versión de Java instalada
openjdk version "17.0.9" 2025-05-19

versión de GIT instalada
git version 2.43.0.windows.1
```
### Configuración de VS Code para trabajar con ANTLR
- Una vez que usted verifique que está todo instalado correctamente, debe instalar la *Extensión de ANTLR para VS Code* .
 1. En VS Code, presione `Ctrl + Shift + X`, o vaya a la sección de "Extensions" (bloque cuadrado con un cuadrante separado) que se encuentra en la barra lateral izquierda, y busque: "ANTLR4 grammar syntax support".
 2. Instale la extensión de Mike Lischke.
 ![image](https://github.com/user-attachments/assets/ec0d6709-3fa4-400c-b3b0-f95ed3ccf364)
 *IMPORTANTE:* Luego de instalar la extensión, reinicie VS Code para que tome los cambios.

 3. Configure las preferencias de generación de código de ANTLR: vaya al menú Archivo/Preferencias/Configuración presionando `Ctrl + ,` y busque las preferencias de ANTLR. Baje hasta la sección Antlr4:Generation y edite `settings.json.`
 ![image](https://github.com/user-attachments/assets/581986b1-b20e-471d-8862-6093ec3feb26)

 La configuracion le debe quedar del siguiente modo:
 ```bash
    "antlr4.generation": {
        "alternativeJar": "antlr-4.13.2-complete.jar",
        "mode": "external",
        "listeners": true,
        "visitors": true,
        "language": "JavaScript",
        "outputDir": "./generated"
    } 
 ```
 *IMPORTANTE:* Guarde el archivo de configuración antes de continuar presionando `Ctrl + S`.


## Instalación

Clonar el repositorio y acceder al proyecto:
1. En una ventana de comandos, ejecute el siguiente comando:
```bash
git clone https://github.com/augustodelahaye/51956.git
```
- Si el proyecto se clonó correctamente, usted debería ver el mensaje “done” en su salida.

2. Ingrese a la carpeta raíz ejecutando:
```bash
cd 51956
```
3. Abra VS Code para trabajar con el código del proyecto. Para esto ejecute en la ventana
de comandos abierta:
```bash
code .
```
- Si todo está en orden, deberia usted poder ver y editar el proyecto en su VS Code.

 *Nota:* Los archivos generados por ANTLR ya están incluídos en el proyecto. No es necesario ejecutar los comandos de ANTLR salvo que se hagan cambios en la gramática.

 ## Otra Alternativa para clonar el proyecto (mas rápida y simple para algunos usuarios)

1. Acceder al siguiente link:(https://github.com/augustodelahaye/51956)
2. Clickear `<> Code` (boton verde que aparece arriba de los archivos)  
3. Seleccionar la opción "Download ZIP" 
![image](https://github.com/user-attachments/assets/10c1754d-b180-40a8-8726-8fa2c05ff8b8))

4. Una vez instalada, ingrese a Visual Studio Code
5. Dentro de VS Code, seleccione la opción "Open Folder..." y seleccione la carpeta `antlr-PilaLang-project`, buscándola donde usted la haya instalado (debe acceder a la carpeta `51956.zip`, luego a la carpeta `51956` y luego a la carpeta correcta ya mencionada).
(![image](https://github.com/user-attachments/assets/ec7741ee-20d9-474f-a9a6-8183ba93c5f7))

## ADVERTENCIA!!

- Al descargar o clonar este repositorio, es posible que se genere una carpeta principal llamada `51956/`. 
- Esto evita problemas con rutas relativas, dependencias y ejecución del proyecto.



## Ejecución

Al seleccionar el archivo PilaLang.g4, usted podrá ver la gramática propuesta para este proyecto. Además, se adjunta un archivo de texto y un archivo pdf (llamado Reglas.pdf) en el repositorio, donde también se podrá visualizar la gramática asignada.
- Para la ejecución del programa, siga los siguientes pasos:
 1. En el repositorio de github usted encontrará unos archivos llamados *`input_correcto_1.txt`*, *`input_correcto_2.txt`*, *`input_incorrecto_1.txt`* e *`input_incorrecto_2.txt`*. En el proyecto dentro de VS Code, edite el archivo `input.txt`, agregando el contenido del ejemplo que usted desee. Una vez que lo tenga, es importante que guarde este archivo presionando `Ctrl + S`.
 
 2. Para ejecutar el programa, abra una terminal (En la barra superior de VS Code seleccione Terminal → New Terminal). Con una terminal "powershell" iniciada (Node.js), escriba y ejecute el siguiente comando: `node index`. También, si es de su gusto, puede ejecutar este comando en una consola de comandos, siempre y cuando esté en la dirección de la carpeta `51956`, es decir, debería ejecutarlo de una manera tal que así:
    ![image](https://github.com/user-attachments/assets/7da98822-a47e-4524-8eba-e1e076b6812c)

    
 3. Para generar y visualizar el árbol sintáctico, usted deberá depurar la gramática. Para esto usted debe:
  - Seleccionar el archivo de la gramática `PilaLang.g4`.
  - Una vez dentro del archivo, iniciar el modo de depuración presionando F5 en su computadora o haciendo click en el botón "Run and Debug" que se encuentra en la barra izquierda de VS Code:

  - Si todo sale bien, usted podrá visualizar el árbol sintáctico de una manera similar a esto (varía según el contenido del archivo input.txt):
    ![image](https://github.com/user-attachments/assets/1373f80a-b5a4-4a9a-8653-c5eb635d9223)


 ## &nbsp; 
 **Si elige un input correcto**:
 - Al ejecutar el programa, le aparecerá algo similar a esto:
   ![image](https://github.com/user-attachments/assets/07c97b42-e1b8-4ecd-b7f8-4002b9732769)


 ## &nbsp; 
 **Si elige un input incorrecto**:
 - Al ejecutar el programa, le aparecerá algo similar a esto:
  ![image](https://github.com/user-attachments/assets/cff2ca14-3316-4e6d-983e-0b739e7b06f5)


 ## Créditos
 - Proyecto desarrollado como parte de la materia Sintáxis y Semántica de los Lenguajes 
 - Universidad Tecnológica Nacional - FRM
 - Bibliografía importante: Guía de Estudio Construcción de Analizador con ANTLR4 + JavaScript https://campus.frm.utn.edu.ar/pluginfile.php/68894/mod_resource/content/3/Gu%C3%ADa%20de%20Estudio%20Construcci%C3%B3n%20de%20Analizador%20con%20ANTLR4%20%2B%20JavaScript.pdf
 ## Autor
 - Nombre: Augusto Delahaye
 - Legajo: 51956
