using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Geolocalization
    {
        public long Id { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
    }
}