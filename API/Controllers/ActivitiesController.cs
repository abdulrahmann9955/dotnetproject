using Persistence;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers

{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task <ActionResult<List<Activity>>> GetActivities(){
        return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]

        public async Task <ActionResult<Activity>> GetActivitiy(Guid id){
        return await _context.Activities.FindAsync(id);
        }

    }
}