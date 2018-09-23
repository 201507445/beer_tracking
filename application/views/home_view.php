<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Canpango's Beer Tracking System</title>
        <?php include 'assets/includes/links.php'; ?>
    </head>
    <body>
        <div class="container-fluid p-0">
            <header class="blogHeader pageHeader">
                <nav>
                    <h1><a href="#" title="home">Canpango</a></h1>
                    <ul>
                        <li><a href="#" title="Home">Home</a></li>
                        <li><a href="#" title="About">About</a></li>
                        <li><a href="#" title="Careers">Careers</a></li>
                        <li><a href="#" title="Contact">Contact</a></li>
                        <li><a href="#" title="Blog">Blog</a></li>
                    </ul>
                </nav>
            </header>
            <div class="container" id="contentWrapper">
                <div class="row">
                    <main class="col-md-9" id="mainContent">
                        <h1>Beer Tracking System</h1>
                        <h2>Keeping Track Of Everyone's Favourite Beer</h2>
                        <div class="row beer-container">
                            <div class="col-md-3 beer"> 
                                <p class="text-center"><b>Beer Name</b></p>
                                <p>Ibu:</p>
                                <p>Ibv:</p>
                                <p>Style:</p>
                                <p>Location:</p>
                                <p>Ibu:</p>
                                <a href="#">Reviews</a>
                            </div>
                            <div class="col-md-3 beer"> 
                                <p class="text-center"><b>Beer Name</b></p>
                                <p>Ibu:</p>
                                <p>Ibv:</p>
                                <p>Style:</p>
                                <p>Location:</p>
                                <p>Ibu:</p>
                                <a href="#">Reviews</a>
                            </div>
                            <div class="col-md-3 beer"> 
                                <p class="text-center"><b>Beer Name</b></p>
                                <p>Ibu:</p>
                                <p>Ibv:</p>
                                <p>Style:</p>
                                <p>Location:</p>
                                <p>Ibu:</p>
                                <a href="#">Reviews</a>
                            </div>
                            <div class="col-md-3 beer"> 
                                <p class="text-center"><b>Beer Name</b></p>
                                <p>Ibu:</p>
                                <p>Ibv:</p>
                                <p>Style:</p>
                                <p>Location:</p>
                                <p>Ibu:</p>
                                <a href="#">Reviews</a>
                            </div>
                            <div class="col-md-3 beer"> 
                                <p class="text-center"><b>Beer Name</b></p>
                                <p>Ibu:</p>
                                <p>Ibv:</p>
                                <p>Style:</p>
                                <p>Location:</p>
                                <p>Ibu:</p>
                                <a href="#">Reviews</a>
                            </div>
                            <div class="col-md-3 beer"> 
                                <p class="text-center"><b>Beer Name</b></p>
                                <p>Ibu:</p>
                                <p>Ibv:</p>
                                <p>Style:</p>
                                <p>Location:</p>
                                <p>Ibu:</p>
                                <a href="#">Reviews</a>
                            </div>
                        </div>
                        <div class="pagination">
                            <a href="#">&laquo;</a>
                            <a class="active" href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">&raquo;</a>
                        </div>
                        
                        <form class="form-inline">
                            <fieldset>
                                <legend><h3>Add New Beer</h3></legend>
                                <div class="form-group">
                                    <label for="name">Beer Name</label>
                                    <input type="text" id="name">
                                    <label for="ibu">Ibu</label>
                                    <input type="text" id="ibu">
                                </div>
                                <hr>
                                <div class="form-group">
                                    <label for="ibv">Ibv</label>
                                    <input type="text" id="ibv">
                                    <label for="location">Brewery Location</label>
                                    <input type="text" id="location">
                                </div>
                                <hr>
                                <label>Category</label>
                                <select>
                                    <option>Brian  Beers</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                </select>

                                <input class="btn btn-primary" type="button" value="Add Beer">
                            </fieldset>
                        </form>
                    </main>
                    <aside class="col-md-3">
                        <section class="info">
                            <div class="widget">
                                <h2>Search</h2>
                                <form>
                                    <input type="search" id="searchField" placeholder="Search Beer" />
                                    <input type="submit" name="search" id="search" value="">
                                </form>
                            </div>
                            <div class="widget">
                                <h2>Categories</h2>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
            <footer id="pageFooter" class="cf">
                <p>&copy;Copyright  Sihle Socishe.  All rights reserved.</p>
            </footer>
        </div>
        <?php include 'assets/includes/scripts.php'; ?>
    </body>
</html>
