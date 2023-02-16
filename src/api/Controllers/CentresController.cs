using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CentresController : ControllerBase
    {
        private readonly CentreContext _context;

        public CentresController(CentreContext context)
        {
            _context = context;
        }

        // GET: api/Centres
        [HttpGet]
        public IEnumerable<Centre> GetCentre()
        {
            return _context.Centre;
        }

        // GET: api/Centres/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCentre([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centre = await _context.Centre.FindAsync(id);

            if (centre == null)
            {
                return NotFound();
            }

            return Ok(centre);
        }

        // PUT: api/Centres/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCentre([FromRoute] long id, [FromBody] Centre centre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != centre.Id)
            {
                return BadRequest();
            }

            _context.Entry(centre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CentreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Centres
        [HttpPost]
        public async Task<IActionResult> PostCentre([FromBody] Centre centre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Centre.Add(centre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCentre", new { id = centre.Id }, centre);
        }

        // DELETE: api/Centres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCentre([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centre = await _context.Centre.FindAsync(id);
            if (centre == null)
            {
                return NotFound();
            }

            _context.Centre.Remove(centre);
            await _context.SaveChangesAsync();

            return Ok(centre);
        }

        private bool CentreExists(long id)
        {
            return _context.Centre.Any(e => e.Id == id);
        }
    }
}