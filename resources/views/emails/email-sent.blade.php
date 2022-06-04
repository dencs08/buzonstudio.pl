<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dziękujemy za kontakt z nami!">
    <link rel="canonical" href="https://www.bisonstudio.pl/kontaktsent"/>
    <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
    <link rel="apple-touch-icon" href="{{asset('images/logos/logo_white.svg')}}">
    <link rel="stylesheet" href="css/app.css" />
    <link rel="stylesheet" href="css/contact.css" />
    <title>Bison Studio - Wysłano, dziękujemy!</title>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M2VGTFKH7L"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-M2VGTFKH7L');
</script>

<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2678438,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

</head>
<body>

        <canvas id="web_gl"></canvas>
            
        <x-loader/>

        <x-3d-disable/>
        <x-navbar/>
        <div id="web-content" class="smooth-locomotive-scroll">
        <x-background-image/>
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

        <x-global-js-variables/>

        <script src="js/app.js"></script>
        <script src="js/contactSent.js"></script>
</body>
</html>