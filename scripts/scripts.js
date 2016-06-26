	//jQuery UI for Buttons
  	$(function() {
		$( "#topButtons" ).buttonset();
		$( "#topButtons2" ).buttonset();
  	});

  	/*---------------------------------------------------------------*/
 	//Tab withen text area Source:user1949974-StackOverflow
	var textareas = document.getElementsByTagName('textarea');
	var count = textareas.length;
	for(var i=0;i<count;i++){
	    textareas[i].onkeydown = function(e){
	        if(e.keyCode==9 || e.which==9){
	            e.preventDefault();
	            var s = this.selectionStart;
	            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
	            this.selectionEnd = s+1;
	        }
	    }
	}
	/*---------------------------------------------------------------*/


 	// Var to determine width
 	var countB=0;

   	//Views all fields
	jQuery(function(){
   		jQuery('#check1').click();
   		jQuery('#check2').click();
   		jQuery('#check3').click();
   		jQuery('#check4').click();

	});

	//Updates active buttons
  	function updateWidth(activeButtons){
  		 	$("#html-area,#css-area,#java-area,#output-area").width(($(window).width()/ activeButtons) - 5);
  	}


	//Auto resize of fields
    function fieldresize(){

  		//Text box height
		$("textarea").height($(window).height()-$("#topBar").height()-43);

		//output box height
	  	$("#output-area").height($(window).height() - $("#topbar").height()-4);

	  	updateWidth(countB);

  	}


  	//Output
  	$("#check5").click(function(){
  		document.getElementById("output-area").contentWindow.eval($("#java-area").val());
  	});

 	function innerHTML(){
 		$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+ $("#css-area").val()+"</style></head><body>"+$("#html-area").val()+"</body></html>");
 	}

  	//resizes textareas when window changes
	fieldresize();
  	$( window ).resize(function(){fieldresize()});


	//updates output
	//Loads HTML to output
	innerHTML()
	$("textarea").on('change keyup paste', function(){
		//Loads HTML to output
		innerHTML();
	});

	/*---------------------------------------------------------------*/
  	//HTML box
  	$("#check1").click(function() {
  		if(document.getElementById('check1').checked){
  			countB += 1;
			$( "#html-area" ).show();
			updateWidth(countB);

  		}else{
  			countB -= 1;
			$( "#html-area" ).hide();
			updateWidth(countB);
  		}
	});
  	/*---------------------------------------------------------------*/
	//CSS box
	$("#check2").click(function() {
  		if(document.getElementById('check2').checked){
			countB += 1;
			$( "#css-area" ).show();
   			updateWidth(countB);
  		}else{
  			countB -= 1;
  			$( "#css-area" ).hide();
  			updateWidth(countB);

  		}
	});
  	/*---------------------------------------------------------------*/
	//Javascript box
	$("#check3").click(function() {
  		if(document.getElementById('check3').checked){
  			countB+=1;
			$( "#java-area" ).show();
			updateWidth(countB);

  		}else{
  			countB-=1;
  			$( "#java-area" ).hide();
  			updateWidth(countB);

  		}
	});
  	/*---------------------------------------------------------------*/
  	//Output box
	$("#check4").click(function() {
  		if(document.getElementById('check4').checked){
  			countB+=1;
			$( "#output-area" ).show();
			updateWidth(countB);
  		}else{
  			countB-=1;
  			$( "#output-area" ).hide();
			updateWidth(countB);
  		}
	});
  	/*---------------------------------------------------------------*/

	//View Source
	$("#check6").click(function(){
			var htmlSource = "<html>\n<head>\n<style type='text/css'>\n	"+ $("#css-area").val()+"\n</style>\n</head>\n<body>\n	"+$("#html-area").val()+"\n</body>\n<script type='text/javascript'>\n	"+$("#java-area").val();
			htmlSource += unescape("\n%3C/script%3E\n%3C/html%3E");
			alert(htmlSource);
	});
