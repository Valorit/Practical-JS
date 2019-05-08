$(document).ready(function () {
  if (localStorage.getItem('btnAccept') != 'yes') {
    //start timeout 4s
    setTimeout(startModal, 4000);
  }
});

function startModal() {
  $('#exampleModalCenter').modal('show');
  $('#btnAccept').on('click', function () {
    //save accept status
    localStorage.setItem('btnAccept', 'yes');
    $('#exampleModalCenter').modal('hide');
  });
}