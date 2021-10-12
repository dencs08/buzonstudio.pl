<!DOCTYPE html>
<html lang="en">
<head>
	<title>mail</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div class="container">
		<form action="{{ route('send.email') }}" class="validate-form" method="post">
            @csrf
		    <span>Contact Form</span>
            @if(session()->has('message'))
                <div class="alert alert-success">
            {{ session()->get('message') }}
                </div>
            @endif
		    <div class="validate-input" data-validate = "Name is required">
		    	<input type="text" name="name" placeholder="Name">
                @error('name')
                    <span class="text-danger"> {{ $message }} </span>
                @enderror
            </div>
		    <div class="validate-input" data-validate = "Valid email is required: ex@abc.xyz">
		    	<input type="text" name="email" placeholder="Email">
                @error('email')
                    <span class="text-danger"> {{ $message }} </span>
                @enderror
            </div>
            <div class="validate-input" data-validate = "Subject is required">
                <input type="text" name="subject" placeholder="subject">

                @error('subject')
                    <span class="text-danger"> {{ $message }} </span>
                @enderror
            </div>
			<div class="validate-input" data-validate = "Message is required">
				<textarea name="content" placeholder="Message"></textarea>
                @error('content')
                    <span class="text-danger"> {{ $message }} </span>
                @enderror
            </div>
                <div class="container">
					<button type="submit">
						Send
					</button>
				</div>
			</form>
		</div>
	</div>
</body>
</html>