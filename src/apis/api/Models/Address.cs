using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace api.Models
{
    public class Address
    {
        public long Id { get; set; }
        public string Street { get; set; }
        public string Suite { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public Geolocalization Geo { get; set; }
    }
}