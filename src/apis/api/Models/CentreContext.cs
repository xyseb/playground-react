using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class CentreContext : DbContext
    {
        public CentreContext(DbContextOptions<CentreContext> options) : base(options) {

        }

        public DbSet<Centre> Centre { get; set; }
        public DbSet<CentreParams> Params { get; set; }

        public DbSet<CentreUser> Users { get; set; }
    }
}