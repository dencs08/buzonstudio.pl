<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&");

            h1 {
                font-size: 2rem;

                color: #111111;
            }

            h2 {
                font-size: 1.5rem;

                color: #111111;
            }

            h3 {
                font-size: 1.25rem;

                color: #111111;
            }

            p {
                font-size: 0.9rem;

                color: #111111;
            }

            .container {
                margin: auto;
                width: 90%;

                background-color: aliceblue;
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

            .card {
                background-color: #fafafa;
                padding: 40px;
                border: 1px #ececec solid;
                border-radius: 5px;
                display: inline-block;

                margin: 0 auto;
                margin-bottom: 25px;

                height: 200px;
                width: 30vw;

                text-align: center;
            }

            .card_message {
                height: auto;

                display: block;

                width: 60vw;
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
                        <h2>Podane infromacje:</h2>
                        <div class="info">
                            <span class="font-bold">Imię: </span> {!! $name !!}
                        </div>
                        <div class="info">
                            <span class="font-bold">Email: </span> {!! $email
                                !!}
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
