<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafio - Acordeão com jquery</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

    <script>
    $( function() {
        $( "#accordion" ).accordion();
    } );
    </script>
</head>
<body>
  
<div id="accordion">
  <h3>Seção 1</h3>
  <div>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita totam corrupti molestiae placeat 
    tenetur necessitatibus deserunt nesciunt sapiente, deleniti, adipisci, 
    consequatur voluptatibus magni blanditiis quas nulla ducimus impedit. Adipisci.
    </p>
  </div>
  <h3>Seção 2</h3>
  <div>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita totam corrupti molestiae placeat 
    tenetur necessitatibus deserunt nesciunt sapiente, deleniti, adipisci, 
    consequatur voluptatibus magni blanditiis quas nulla ducimus impedit. Adipisci.
    </p>
  </div>
  <h3>Seção 3</h3>
  <div>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita totam corrupti molestiae placeat 
    tenetur necessitatibus deserunt nesciunt sapiente, deleniti, adipisci, 
    consequatur voluptatibus magni blanditiis quas nulla ducimus impedit. Adipisci.
    </p>
    <ul>
      <li>Listar item 1</li>
      <li>Listar item 2</li>
      <li>Listar item 3</li>
    </ul>
  </div>
  <h3>Seção 4</h3>
  <div>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita totam corrupti molestiae placeat 
    tenetur necessitatibus deserunt nesciunt sapiente, deleniti, adipisci, 
    consequatur voluptatibus magni blanditiis quas nulla ducimus impedit. Adipisci.
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita totam corrupti molestiae placeat 
    tenetur necessitatibus deserunt nesciunt sapiente, deleniti, adipisci, 
    consequatur voluptatibus magni blanditiis quas nulla ducimus impedit. Adipisci.
    </p>
  </div>
</div>
</body>
</html>