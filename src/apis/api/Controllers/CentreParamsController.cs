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
    public class CentreParamsController : ControllerBase
    {
        private readonly CentreContext _context;

        public CentreParamsController(CentreContext context)
        {
            _context = context;
        }

        // GET: api/CentreParams
        [HttpGet]
        public IEnumerable<CentreParams> GetParams()
        {
            return _context.params;
        }

        // GET: api/CentreParams/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCentreParams([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centreParams = await _context.params.FindAsync(id);

            if (centreParams == null)
            {
                return NotFound();
            }

            return Ok(centreParams);
        }

        // PUT: api/CentreParams/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCentreParams([FromRoute] long id, [FromBody] CentreParams centreParams)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != centreParams.Id)
            {
                return BadRequest();
            }

            _context.Entry(centreParams).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CentreParamsExists(id))
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

        // POST: api/CentreParams
        [HttpPost]
        public async Task<IActionResult> PostCentreParams([FromBody] CentreParams centreParams)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.params.Add(centreParams);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCentreParams", new { id = centreParams.Id }, centreParams);
        }

        // DELETE: api/CentreParams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCentreParams([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centreParams = await _context.params.FindAsync(id);
            if (centreParams == null)
            {
                return NotFound();
            }

            _context.params.Remove(centreParams);
            await _context.SaveChangesAsync();

            return Ok(centreParams);
        }

        private bool CentreParamsExists(long id)
        {
            return _context.params.Any(e => e.Id == id);
        }
    }
}