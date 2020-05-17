<!doctype html>
<html lang="{{ app()->getLocale() }}">
    
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Mosaddek">
    <meta name="keyword" content="FlatLab, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('Assets-Admin/img/favicon.html') }}">

    <title>Dashboard - Admin</title>
</head>
    <body>
        <div id="app"></div>
    </body>
    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        window.Laravel = {!! json_encode([
           'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</html>