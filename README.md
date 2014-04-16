angular-helpers
===============

A simple list of useful AngularJS helpers (directives, services, etc)

## Directives

### src-no-fail

Directive to reload images that failed to load. It retries 4 times (with 3s delay between them) before aborting...

Usage : <img src-no-fail="folder/image_{{id}}.jpg">

## Filters

### to_tructed

Simple replacement for ng-bind-html-unsafe

Usage : <div ng-bind-html="myScope.myHtml | to_trusted"></div>



Licence
======================
(The MIT License)

Copyright (C) 2013 Leeroy Brun, www.leeroy.me

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
