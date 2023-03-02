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
    public class CentreUsersController : ControllerBase
    {
        private readonly CentreContext _context;

        public CentreUsersController(CentreContext context)
        {
            _context = context;
        }

        // GET: api/CentreUsers
        [HttpGet]
        public IEnumerable<CentreUser> GetUsers()
        {
            return _context.Users;
        }

        // GET: api/CentreUsers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCentreUser([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centreUser = await _context.Users.FindAsync(id);

            if (centreUser == null)
            {
                return NotFound();
            }

            return Ok(centreUser);
        }

        // PUT: api/CentreUsers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCentreUser([FromRoute] long id, [FromBody] CentreUser centreUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != centreUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(centreUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CentreUserExists(id))
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

        // POST: api/CentreUsers
        [HttpPost]
        public async Task<IActionResult> PostCentreUser([FromBody] CentreUser centreUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Users.Add(centreUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCentreUser", new { id = centreUser.Id }, centreUser);
        }

        // DELETE: api/CentreUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCentreUser([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var centreUser = await _context.Users.FindAsync(id);
            if (centreUser == null)
            {
                return NotFound();
            }

            _context.Users.Remove(centreUser);
            await _context.SaveChangesAsync();

            return Ok(centreUser);
        }

        private bool CentreUserExists(long id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}