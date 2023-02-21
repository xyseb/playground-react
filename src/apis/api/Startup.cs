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

            context.SaveChanges();
        }
    }
}
