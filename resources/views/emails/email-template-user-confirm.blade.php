<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
            body {
                font-family: "Arial";
            }

            h1 {
                font-size: clamp(1.5rem, 2.5vw, 2rem);
                font-family: "Helvetica";

                color: #111111;
                margin-top: 10px;
                margin-bottom: 25px;
            }

            h2 {
                font-size: clamp(1.25rem, 2.25vw, 1.5rem);
                font-family: "Helvetica";

                color: #222222;
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
            .font-bolder {
                font-weight: 700;
            }
            .font-bold {
                font-weight: 600;
            }
            .font-regular {
                font-weight: 400;
            }
            .font-light {
                font-weight: 300;
            }

            .card {
                background-color: #ffffff;
                padding: 60px 75px;
                border: 1px #eeeeee solid;
                border-bottom: 2px rgb(71, 73, 207) dashed;
                border-radius: 5px;
                display: inline-block;

                margin: 0 auto;
                margin-bottom: 25px;

                height: auto;
                width: clamp(100px, 27.5vw, 800px);

                text-align: center;
            }

            .logo {
                width: clamp(25px, 10vw, 100px);
                height: auto;

                margin-bottom: 0px;
            }
        </style>

        <title>Email bisonstudio</title>
    </head>
    <body>
        <div class="container body">
            <div class="center">
                <div class="card">
                    <div class="card-body">
                    <img src="{{ $message->embed('images/logos/logo_black.png') }}" class="logo" />
                        <h1>Hej {!! $name !!}!</h1>
                        <h2 class="font-regular">
                            Dziękujemy za kontakt z nami, odezwiemy się
                            niedługo!
                        </h2>
                        <p class="font-light">Do usłyszenia! 🖐️</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
