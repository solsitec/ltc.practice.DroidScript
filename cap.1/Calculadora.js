
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Calculadora" );
	txt.SetMargins(0,0,0,0.03)
    txt.SetTextSize( 22 );
    lay.AddChild( txt );
	
	img = app.CreateImage( "Img/img_area.png", 0.4, -1 );
	img.SetMargins(0,0,0,0.02)
    lay.AddChild( img );
    
    edtB = app.CreateTextEdit( "", 0.5, 0.05 );
	edtB.SetHint( "Ingrese la Base" )
    lay.AddChild( edtB );
    
    edtH = app.CreateTextEdit( "", 0.5, 0.05 );
	edtH.SetHint( "Ingrese la Altura" )
	edtH.SetMargins(0,0,0,0.02)
    lay.AddChild( edtH );
    
    btn = app.CreateButton( "Calcular Area" );
    btn.SetOnTouch( CalcularArea );
    lay.AddChild( btn );
    
    textR = app.CreateText("...");
    textR.SetTextSize(25)
    lay.AddChild(textR);
    
	//Add layout to app.	
	app.AddLayout( lay )
}

function CalcularArea(){
    
    var b = edtB.GetText()
    var h = edtH.GetText()
    
    var r = (b*h)/2;
    
    // app.ShowPopup("El area es: "+r);
    textR.SetText(r);
    // extra vibrador
    app.Vibrate( "0,100,30,100,50,300" );
}
