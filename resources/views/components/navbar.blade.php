<header g-component="Navbar" data-header class="position-fixed">
    <div class="row vw-100 px-3 px-lg-4">
        <div class="col-2 px-0 mx-0 d-flex justify-content-start align-items-center">
            <a href="/start" class="d-flex align-items-center">
                <img src="{{asset('images/logos/buzonstudio_white_cropped.svg')}}" alt="buzonstudio logo (branding)" />
            </a>
        </div>
        <div class="col-4 px-0 mx-0"></div>
        <div class="col-4 px-0 mx-0"></div>
        <div class="col-2 px-0 mx-0 d-flex justify-content-end align-items-center">
            <button data-hamburger class="hamburger hamburger--collapse p-0 d-flex align-items-center" type="button"
                aria-label="Menu" aria-controls="navigation" aria-expanded="false">
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
</header>

<nav data-navigation id="navigation" class="position-fixed">  
    <div class="wrapper d-flex-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex justify-content-start justify-content-lg-center align-items-center">
                    <ul class="ps-0">
                        <li>
                            <span class="nav-number">01</span>
                            <a web-link href="/start" class="link-primary font-family-header">
                                Strona Główna
                            </a>
                        </li>
                        <li>
                            <span class="nav-number">02</span>
                            <a web-link href="/oferta" class="link-primary font-family-header">
                                Oferta
                            </a>
                        </li>
                        <li>
                            <span class="nav-number">03</span>
                            <a web-link href="/portfolio" class="link-primary font-family-header">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <span class="nav-number">04</span>
                            <a web-link href="/kontakt" class="link-primary font-family-header">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="nav-contact col-lg-6 d-flex justify-content-start justify-content-lg-center align-items-center">
                    <div class="my-0 font-color-secondary">
                        <a href="mailto:{{config('app.mail')}}?subject = Oferta&body = Wiadomość" class="underline-primary mail-link fw-medium font-color-secondary">
                            {{config('app.mail')}}
                        </a>
                    </d>
                    <div class="my-0 font-color-dark mt-1 mt-lg-0">
                        {{config('app.phone')}}
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-icons mx-automt-3 mt-lg-0">
            <div class="icon-wrapper mx-0 me-2 mx-lg-2 d-inline-block">
                <a href="{{config('app.fb')}}" rel="noreferrer" target="_blank">                
                    <img src="{{asset('images/social/fb.svg')}}" alt="">
                </a>
            </div>
            <div class="icon-wrapper mx-0 mx-lg-2 d-inline-block">
                <a href="{{config('app.ig')}}" rel="noreferrer" target="_blank">
                    <img src="{{asset('images/social/ig.svg')}}" alt="">
                </a>
            </div>
        </div>
    </div>    
</nav>