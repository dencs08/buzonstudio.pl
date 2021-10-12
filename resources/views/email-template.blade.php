<div class="container">
    @if (session('resent'))
         <div class="alert alert-success" role="alert">
            {{ __('A fresh mail has been sent to your email address.') }}
        </div>
    @endif
    {!! $content !!}
</div>