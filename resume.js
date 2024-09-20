$(".listProgram .value").each(function() {
    $(this).css('width', $(this).data('percent'))
  });
  
$(".activeSidebar .navTab").click(function(){
$(this).addClass('active');
$(this).siblings().removeClass('active');

$('.sidebar').hide();
$('[data-id=' + $(this).data('target') + ']').show();
});

$(".activeSidebar .navTab.active").click();

$(".folderTitle").click(function(){
let folder = $(this).closest('.folder');
folder.find('i').toggleClass('fa-angle-down fa-angle-right')
folder.find('.folderContent').slideToggle();
});