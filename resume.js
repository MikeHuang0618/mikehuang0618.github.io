$(".listProgram .value").each(function() {
    $(this).css('width', $(this).data('percent'))
  });
  
$(".activeSidebar .navTab").click(function(){
  $(this).addClass('active').siblings().removeClass('active');

  var target = $('[data-id=' + $(this).data('target') + ']');

  if (target.is(':visible')) {
    target.hide();
  } else {
    $('.sidebar').hide();
    target.show();
    $('.sidebar').css('flex', '0.5');
  }
});

// $(".activeSidebar .navTab.active").click();

$(".folderTitle").click(function(){
  let folder = $(this).closest('.folder');
  folder.find('i').toggleClass('fa-angle-down fa-angle-right')
  folder.find('.folderContent').slideToggle();
});