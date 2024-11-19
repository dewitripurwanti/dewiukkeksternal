document.querySelectorAll('a[href^="#"]').forEach (anchor =>  {
    anchor.addEventListener ('clik', function(e){
        e.preventDefault();

        document.querySelector (this.gettAttribute ('href')).scrollinterview ({
            behavior: 'smooth'
        });
    });
});