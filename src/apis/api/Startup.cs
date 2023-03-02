using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddDbContext<CentreContext>(opt => opt.UseInMemoryDatabase("Centre"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();

            InitDatabaseAsync(serviceProvider).Wait();
        }

        private async System.Threading.Tasks.Task InitDatabaseAsync(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<CentreContext>();

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            context.Add<Centre>(
                new Centre { Name = "In-memory Database Centre" }
            );

            context.AddRange(
                new CentreParams { Name = "IsFromAPI", Value = "true" },
                new CentreParams { Name = "IsNamedCentre", Value = "true" },
                new CentreParams { Name = "IsEvaluationEnabled", Value = "true" },
                new CentreParams { Name = "CreatedAt", Value = new DateTime().ToLongDateString() },
                new CentreParams { Name = "MealsCount", Value = "true" },
                new CentreParams { Name = "SalesCount", Value = "14957;21354;34987;48654;29999;54565;35555;88888;99999;34444;40000;41234" },
                new CentreParams { Name = "CustomersCount", Value = "123856472" },
                new CentreParams { Name = "IsInteroperable", Value = "false" },
                new CentreParams { Name = "IsInMemoryCentre", Value = "true" },
                new CentreParams { Name = "UserCount", Value = "8" }
            );

            context.AddRange(
                new CentreUser {
                    Name = "Leanne Graham",
                    Username = "Bret",
                    Email = "Sincere@april.biz",
                    Address = new Address {
                        Street = "Kulas Light",
                        Suite = "Apt. 556",
                        City = "Gwenborough",
                        Zipcode = "92998-3874",
                        Geo = new Geolocalization {
                            Lat = -37.3159,
                            Lng = 81.1496
                        }
                    },
                    Phone = "1-770-736-8031 x56442",
                    Website = "hildegard.org",
                    Compagny = new Compagny {
                        Name = "Romaguera-Crona",
                        CatchPhrase = "Multi-layered client-server neural-net",
                        BS = "harness real-time e-markets"
                    }
                },
                new CentreUser {
                    Name = "Ervin Howell",
                    Username = "Antonette",
                    Email = "Shanna@melissa.tv",
                    Address = new Address {
                        Street = "Victor Plains",
                        Suite = "Suite 879",
                        City = "Wisokyburgh",
                        Zipcode = "90566-7771",
                        Geo = new Geolocalization {
                            Lat = -43.9509,
                            Lng = -34.4618
                        }
                    },
                    Phone = "010-692-6593 x09125",
                    Website = "anastasia.net",
                    Compagny = new Compagny {
                        Name = "Deckow-Crist",
                        CatchPhrase = "Proactive didactic contingency",
                        BS = "synergize scalable supply-chains"
                    }
                },
                new CentreUser {
                    Name = "Clementine Bauch",
                    Username = "Samantha",
                    Email = "Nathan@yesenia.net",
                    Address = new Address {
                        Street = "Douglas Extension",
                        Suite = "Suite 847",
                        City = "McKenziehaven",
                        Zipcode = "59590-4157",
                        Geo = new Geolocalization {
                            Lat = -68.6102,
                            Lng = -47.0653
                        }
                    },
                    Phone = "1-463-123-4447",
                    Website = "ramiro.info",
                    Compagny = new Compagny {
                        Name = "Romaguera-Jacobson",
                        CatchPhrase = "Face to face bifurcated interface",
                        BS = "e-enable strategic applications"
                    }
                },
                new CentreUser {
                    Name = "Patricia Lebsack",
                    Username = "Karianne",
                    Email = "Julianne.OConner@kory.org",
                    Address = new Address {
                        Street = "Hoeger Mall",
                        Suite = "Apt. 692",
                        City = "South Elvis",
                        Zipcode = "53919-4257",
                        Geo = new Geolocalization {
                            Lat = 29.4572,
                            Lng = -164.2990
                        }
                    },
                    Phone = "493-170-9623 x156",
                    Website = "kale.biz",
                    Compagny = new Compagny {
                        Name = "Robel-Corkery",
                        CatchPhrase = "Multi-tiered zero tolerance productivity",
                        BS = "transition cutting-edge web services"
                    }
                },
                new CentreUser {
                    Name = "Chelsey Dietrich",
                    Username = "Kamren",
                    Email = "Lucio_Hettinger@annie.ca",
                    Address = new Address {
                        Street = "Skiles Walks",
                        Suite = "Suite 351",
                        City = "Roscoeview",
                        Zipcode = "33263",
                        Geo = new Geolocalization {
                            Lat = -31.8129,
                            Lng = 62.5342
                        }
                    },
                    Phone = "(254)954-1289",
                    Website = "demarco.info",
                    Compagny = new Compagny {
                        Name = "Keebler LLC",
                        CatchPhrase = "User-centric fault-tolerant solution",
                        BS = "revolutionize end-to-end systems"
                    }
                },
                new CentreUser {
                    Name = "Mrs. Dennis Schulist",
                    Username = "Leopoldo_Corkery",
                    Email = "Karley_Dach@jasper.info",
                    Address = new Address {
                        Street = "Norberto Crossing",
                        Suite = "Apt. 950",
                        City = "South Christy",
                        Zipcode = "23505-1337",
                        Geo = new Geolocalization {
                        Lat = -71.4197,
                        Lng = 71.7478
                        }
                    },
                    Phone = "1-477-935-8478 x6430",
                    Website = "ola.org",
                    Compagny = new Compagny {
                        Name = "Considine-Lockman",
                        CatchPhrase = "Synchronised bottom-line interface",
                        BS = "e-enable innovative applications"
                    }
                },
                new CentreUser {
                    Name = "Kurtis Weissnat",
                    Username = "Elwyn.Skiles",
                    Email = "Telly.Hoeger@billy.biz",
                    Address = new Address {
                        Street = "Rex Trail",
                        Suite = "Suite 280",
                        City = "Howemouth",
                        Zipcode = "58804-1099",
                        Geo = new Geolocalization {
                            Lat = 24.8918,
                            Lng = 21.8984
                        }
                    },
                    Phone = "210.067.6132",
                    Website = "elvis.io",
                    Compagny = new Compagny {
                        Name = "Johns Group",
                        CatchPhrase = "Configurable multimedia task-force",
                        BS = "generate enterprise e-tailers"
                    }
                },
                new CentreUser {
                    Name = "Nicholas Runolfsdottir V",
                    Username = "Maxime_Nienow",
                    Email = "Sherwood@rosamond.me",
                    Address = new Address {
                        Street = "Ellsworth Summit",
                        Suite = "Suite 729",
                        City = "Aliyaview",
                        Zipcode = "45169",
                        Geo = new Geolocalization {
                            Lat = -14.3990,
                            Lng = -120.7677
                        }
                    },
                    Phone = "586.493.6943 x140",
                    Website = "jacynthe.com",
                    Compagny = new Compagny {
                        Name = "Abernathy Group",
                        CatchPhrase = "Implemented secondary concept",
                        BS = "e-enable extensible e-tailers"
                    }
                },
                new CentreUser {
                    Name = "Glenna Reichert",
                    Username = "Delphine",
                    Email = "Chaim_McDermott@dana.io",
                    Address = new Address {
                        Street = "Dayna Park",
                        Suite = "Suite 449",
                        City = "Bartholomebury",
                        Zipcode = "76495-3109",
                        Geo = new Geolocalization {
                            Lat = 24.6463,
                            Lng = -168.8889
                        }
                    },
                    Phone = "(775)976-6794 x41206",
                    Website = "conrad.com",
                    Compagny = new Compagny {
                        Name = "Yost and Sons",
                        CatchPhrase = "Switchable contextually-based project",
                        BS = "aggregate real-time technologies"
                    }
                },
                new CentreUser {
                    Name = "Clementina DuBuque",
                    Username = "Moriah.Stanton",
                    Email = "Rey.Padberg@karina.biz",
                    Address = new Address {
                        Street = "Kattie Turnpike",
                        Suite = "Suite 198",
                        City = "Lebsackbury",
                        Zipcode = "31428-2261",
                        Geo = new Geolocalization {
                            Lat = -38.2386,
                            Lng = 57.2232
                        }
                    },
                    Phone = "024-648-3804",
                    Website = "ambrose.net",
                    Compagny = new Compagny {
                        Name = "Hoeger LLC",
                        CatchPhrase = "Centralized empowering task-force",
                        BS = "target end-to-end models"
                    }
                }
            );

            context.SaveChanges();
        }
    }
}
