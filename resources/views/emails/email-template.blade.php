<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&");

            h1 {
                font-size: clamp(1.5rem,2.5vw,2rem);
                color: #111111;
            }

            h2 {
                font-size: clamp(1.25rem,2.25vw,1.5rem);
                color: #222222;
            }

            h3 {
                font-size: clamp(1rem,2.1vw,1.25rem);
                color: #333333;
            }

            p {
                font-size: clamp(0.75rem,1.5vw,0.9rem);
                color: #444444;
            }

            span{
                font-size: clamp(0.75rem,1.5vw,0.9rem);
                color: #444444;
            }

            .container {
                margin: auto;
                width: 90%;
            }

            .center {
                display: flex;

                justify-content: center;
                align-items: center;

                margin: auto;
            }

            .font-bold {
                font-weight: 600;
            }
            .font-light{
                font-weight: 400;
            }

            .card {
                background-color: #fdfdfd;
                padding: 40px;
                border: 1px #ececec solid;
                border-radius: 5px;
                display: inline-block;

                margin: 0 auto;
                margin-bottom: 25px;

                height: 200px;
                width: clamp(100px, 27.5vw, 800px);

                text-align: center;
            }

            .card_message {
                height: auto;

                display: block;

                width: clamp(200px, 60vw, 1600px);
            }

            .li_item {
                text-align: start;
            }

            .info {
                text-align: start;
            }

            .row {
                margin: auto;
                display: inline-block;
            }

        </style>

        <title>Email bisonstudio</title>
    </head>
    <body>
        <div class="container body">
            <div class="center">
                <div class="row">
                    <div class="card">
                        <h3>Zainteresowany:</h3>
                        <ul>
                            @foreach ($controlInfo as $item)
                            <li class="li_item">{!! $item !!}</li>
                            @endforeach
                        </ul>
                    </div>
                    
                    <div class="card">
                        <h3>Podane infromacje:</h2>
                        <div class="info">
                            <span class="font-bold">Imię: </span> <span class="font-light">{!! $name !!}</span>
                        </div>
                        <div class="info">
                            <span class="font-bold">Email: </span> <span class="font-light">{!! $email !!}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card card_message">
                    <div class="info">
                        <span class="font-bold">Wiadomość: </span>{!! $content !!}
                    </div>
                </div>
                
            </div>
        </div>
    </body>
</html>
