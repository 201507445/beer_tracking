<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Canpango's Beer Tracking System</title>
        <?php 
        $other_styles = '<link rel="stylesheet" type="text/css" href="'.base_url('assets/src/alertify/themes/alertify.bootstrap.css').'">';
        include 'assets/includes/links.php'; ?>
    </head>
    <body>
        <div class="container-fluid p-0">
            <header class="blogHeader pageHeader">
                <nav class="navbar">
                    <h1><a href="#" title="home">Canpango</a></h1>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-collapse" aria-expanded="false">    <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="top-collapse">
                        <ul>
                            <li><a href="#" title="Home">Home</a></li>
                            <li><a href="#" title="About">About</a></li>
                            <li><a href="#" title="Careers">Careers</a></li>
                            <li><a href="#" title="Contact">Contact</a></li>
                            <li><a href="#" title="Blog">Blog</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div class="container" id="contentWrapper">
                <div class="row">
                    <main class="col-md-9" id="mainContent">
                        <h1>Beer Tracking System</h1>
                        <h2>Keeping Track Of Everyone's Favourite Beer</h2>
                        <?php
                            $param = '';
                            if(isset($_GET['category'])){
                                $param = $_GET['category'];                                
                            }else if(isset($_GET['q'])){
                                $param = $_GET['q'];
                            }

                            if($param != ''){
                                echo '<div class="remove-filter"><a href="./">Empty filtering</a></div>';
                            }
                        ?>
                        
                        <div class="row beer-container"></div>
                        <div class="beer-pagination">
                            <nav aria-label="Page navigation">
                                <ul class="pagination"></ul>
                            </nav>
                        </div>

                        <div>
                            <form action="" method="post" id="addBeer-form">
                                <fieldset>
                                    <legend><h3>Add New Beer</h3></legend>
                                    <div class="row">
                                        <div class="col-md-12 form-error"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-xs-12">
                                            <label for="name">Beer Name</label>
                                            <input name="name" required="1" class="form-control" type="text" id="name" placeholder="Enter name of beer">
                                        </div>
                                        <div class="col-md-6 col-xs-12">
                                            <label for="ibu">Ibu</label>
                                            <input name="ibu" required="1" class="form-control" type="text" id="ibu" placeholder="Enter Ibu">
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-6 col-xs-12">
                                            <label for="abv">Abv</label>
                                            <input name="abv" required="1" class="form-control" type="text" id="abv" placeholder="Enter Ibv">
                                        </div>
                                        <div class="col-md-6 col-xs-12">
                                            <label for="brewery_location">Brewery Location</label>
                                            <input name="brewery_location" required="1" class="form-control" type="text" id="brewery_location" placeholder="Brewery Location">
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-6 col-xs-12">
                                            <label for="category">Category</label>
                                            <select id="category" required="1" name="category" class="form-control">
                                                <option value="">Select beer category</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-xs-12">
                                            <label for="style">Style</label>
                                            <input name="style" required="1" class="form-control" type="text" id="style" placeholder="Beer style">
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-md-6 col-xs-12">
                                            <label for="calories">Calories</label>
                                           <input name="calories" required="1" value="1" class="form-control" type="number" id="calories" placeholder="Calories in the beer">
                                        </div>
                                        <div class="col-md-6 col-xs-12">
                                            
                                        </div>
                                    </div>
                                    <div class="addBeer-bottom">
                                        <button class="btn btn-primary" type="submit">Add Beer</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </main>
                    <aside class="col-md-3">
                        <section class="info">
                            <div class="widget">
                                <h2>Search</h2>
                                <div class="side-search">
                                    <form id="search-form" action="<?=base_url('')?>" method="get">                                       
                                        <input type="search" id="searchField" class="form-control" placeholder="Search Beer" aria-describedby="search-beer" name="q">
                                        <button type="submit" name="search-beer" id="search-beer"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="widget">
                                <h2>Categories</h2>
                                <ul id="cat">

                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
            <footer id="pageFooter" class="cf">
                <p>&copy; Copyright, Sihle Socishe. All Rights Reserved.</p>
            </footer>
        </div>
        <?php 
        $other_scripts = '<script type="text/javascript" src="'.base_url('assets/src/alertify/lib/alertify.min.js').'"></script>';
        include 'assets/includes/scripts.php'; ?>
    </body>
</html>
