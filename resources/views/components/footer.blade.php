<!-- Footer -->
<footer data-scroll-section id="footer" class="mb-2">

    <section>
        <hr class="section-divider footer-section-divider" />
        <section>
            <div class="container text-center text-md-start">
                <a href="/kontakt" class="font-family-header text-uppercase fw-light lh-none link-primary">
                    <h3 class="my-2 my-md-0 link-bracket-display">Zostańmy w kontakcie</h3>
                </a>
                <div class="row">
                    <div class="col-md-7 gs gs_fromLeft">

                        <a
                            href="mailto:{{config('app.mail')}}?subject = Oferta&body = Wiadomość"
                            class="underline-primary mail-link fw-medium font-color-secondary"
                            >{{config('app.mail')}}</a
                        >

                        <h4 class="phone-number font-color-dark fw-medium mb-2 mt-2">{{config('app.phone')}}</h4>

                        <div class="footer-social-icons mt-3 mt-md-2">
                            
                            <a href="/start">
                                <div class="d-inline me-md-2 mx-1 mx-md-0 link-primary">
                                    <img src="{{asset('images/logos/favicon/buzonstudio_favicon_white.svg')}}" alt="logotyp {{config('app.name')}}">
                                </div>
                            </a>

                            <a href="{{config('app.fb')}}" rel="noreferrer" target="_blank">
                                <div class="d-inline me-md-2 mx-1 mx-md-0 link-primary">
                                    <img src="{{asset('images/social/fb.svg')}}" alt="buzonstudio facebook">
                                </div>
                            </a>

                            <a href="{{config('app.ig')}}" rel="noreferrer" target="_blank">
                                <div class="d-inline me-md-2 mx-1 mx-md-0 link-primary">
                                    <img src="{{asset('images/social/ig.svg')}}" alt="buzonstudio instagram">
                                </div>
                            </a>
                        </div>

                        <div class="footer-links text-uppercase mt-4 mb-5 fw-light">
                            <ul>
                                <li class="my-2"><a href="/start" class="underline-dark">start</a></li>
                                <li class="my-2"><a href="/oferta" class="underline-dark">oferta</a></li>
                                <li class="my-2"><a href="/portfolio" class="underline-dark">portfolio</a></li>
                                <li class="my-2"><a href="/kontakt" class="underline-dark">kontakt</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div data-scroll class="col-md-5 d-md-block d-none gs gs_fromRight">
                        <div class="footer-portfolio">
                            <div class="footer-portfolio-wrapper">
                                <img src="{{asset('images/portfolio/bielany/back.jpg')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="font-family-header text-uppercase text-center text-md-start mt-2">
                    <div class="d-block d-md-inline-block mt-2 mt-md-0 me-0 me-md-4">
                        <a href="/polityka" class="underline-dark font-color-dark">Polityka prywatności</a>
                    </div>
                    <div class="d-block d-md-inline-block mt-2 mt-md-0">
                        <span class="cursor-pointer font-color-dark">WYŁĄCZ 3D</span>
                    </div>
                    <div class="d-block d-md-inline-block mt-2 mt-md-0 float-none float-md-end">
                        <span class="font-color-darker">© 2021 {{config('app.name')}} wszelkie prawa zastrzeżone.</span>
                    </div>
                </div>
            </div>
        </section>
        <div class="scroll-blocker"></div>
    </section>
</footer>
