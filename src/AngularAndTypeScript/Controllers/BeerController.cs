using System.Collections.Generic;
using AngularAndTypeScript.Models;
using Microsoft.AspNet.Mvc;

namespace AngularAndTypeScript.Controllers
{
    [Route("api/[controller]")]
    public class BeerController : Controller
    {
        // GET: api/beer
        [HttpGet]
        public List<Beer> GetBeers()
        {
            var fakeBeers = new List<Beer>
            {
                new Beer {Id = 1,Name = "VB",Colour = "Yellow", HasTried = true},
                new Beer {Id = 2,Name = "James Squire", Colour = "Pale", HasTried = false},
                new Beer {Id = 3,Name = "Happy Goblin", Colour = "Amber", HasTried = true}
            };

            return fakeBeers;
        }

    }
}
