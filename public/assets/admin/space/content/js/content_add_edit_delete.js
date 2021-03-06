jQuery(document).ready(function($) {
		
		tinymce.init({
  			selector: '.field-type-textarea',  
				menubar: false,
				plugins: [
    			'autolink lists link charmap textcolor emoticons paste'
  			],
				paste_as_text: true,
				block_formats: 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3',
				toolbar: 'insert | undo redo |  formatselect fontselect emoticons | bold italic color forecolor backcolor  | alignleft aligncenter alignright alignjustify | bullist outdent indent | removeformat',
		});


		tinymce.init({
  			selector: '.field-type-textfield',  
				menubar: false,
				plugins: [
    			'autolink lists link charmap textcolor emoticons paste'
  			],
				paste_as_text: true,
				block_formats: 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3',
				toolbar: 'insert | undo redo |  formatselect fontselect emoticons | bold italic color forecolor backcolor  | alignleft aligncenter alignright alignjustify | bullist outdent indent | removeformat',
		});


    $('.content-add-save').click(function() {

        $(this).addClass('disabled');
        $('form').submit();

    });


    $('.content-delete').click(function() {

        $(this).addClass('disabled');
        $('form').submit();
    });


});
