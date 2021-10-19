<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="images/logos/logo_white-cropped.svg" />
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="css/contact.css" />
    <title>bisonstudio</title>
</head>
<body>

        <canvas id="web_gl"></canvas>
            
        <x-loader/>

        <x-navbar/>

        <div id="web-content" class="smooth-locomotive-scroll">
        <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>Udało się! Email został wysłany,</h1>
                <h2>Odezwiemy się do Ciebie poprzez email podany w formularzu.</h2>
                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="thanks-email">
            <div class="container">
                <p class="gs gs_fromLeft">Dziękujemy za zaufanie, do usłyszenia wkrótce!</p>
    
                <a class="gs gs_fromLeft a_btn web_link_transitions" href="start">Powrót na stronę główną</a>
            </div>
        </section>

        <x-footer/>
        </div>

        <x-GlobalJsVariables/>

        <script src="js/app.js"></script>
        <script src="js/contactSent.js"></script>
</body>
</html>