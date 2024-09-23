# AngularApp1
Angular 15 and .NET Core 6 in single solution

I run this by opening the solution and running in Visual Studio 2022 Community edition.   I pulled the code down from github on a different computer and it ran fine.
I did get a CORS error the first time, but it went away on the second run.   This does use https, but I did not run into any cert issues.  https://localhost:4200/

This would not pass a code review as complete, but I ran into many issues along the way and don't have any more time to give to this at the moment.   I have not used Angular in over 6 years, so this was a major learning process for me again.

This application has a form with name and address fields.   The form is serialized and converted to BASE64 and sent to the .NET core application on the querystring.
The querystring is decoded on the .NET side and parsed as JSON (Newtsoft package was the only package added) and retured to Angular as Name and Address and displayed in JSON format.

The commmunication is using GET.   I first tried using POST, but ran into issues processing the return data on the Angular side.   If I was going to continue work on the project, getting the POST to work would be my next step.   


Angular CLI: 15.2.11
Node: 16.13.2
Package Manager: npm 8.1.2
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1502.11 (cli-only)
@angular-devkit/core         15.2.11 (cli-only)
@angular-devkit/schematics   15.2.11 (cli-only)
@schematics/angular          15.2.11 (cli-only)