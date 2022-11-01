<!--  -->

<!DOCTYPE html>
<html style="font-size: 16px;" lang="en">

<?php include 'php/head.html';?>


<body onload="main()">

    <?php include 'php/header.html';?>



    <div id="blog-intro" class="blog-block">
        <img src="images/BR_cover.jpg" alt="" width="100%" height="800px">
    </div>

    <div id="blog-head" class="blog-block">
        <div class="ls-wrapper">
            <h2>Travel blog homepage</h2>

            Hey you curious explorer!
            <br>
            <br>
            Thanks for visiting my blog.
            I hope you’ll enjoy the stories I tell in these pages. They are a little part of my life that i am
            glad to share
            with you, may it help you decide where to go for your next trip or make the life change you need.
            <br>
            <br>
            It won’t be a Lonely Planet guide, but rather a personal story-telling with my favorite moments and
            places.
            Here below I pinned three special stories, or find your way to the article or country you would like!
            Good reading!
        </div>
    </div> <!-- end blog-head -->

    <div id="blog-break" class="blog-block">
    </div>

    <?php include '../php/footer.html';?>




    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldHigh.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script src="js/map.js"></script>



    <script>
        function main() {
            const facts = [
                'blog/PE_Cusco.html',
                'blog/PE_Peru.html'
            ]
            var rnd_link = facts[Math.floor(Math.random() * facts.length)];
            document.getElementById("rnd_link").href = rnd_link;
        }
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.6.1.min.js"></script>
    <script src="js/ajax-utils.js"></script>
    <script src="js/script.js"></script>

</body>

</html>