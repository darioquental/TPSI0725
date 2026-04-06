using Hotel_Maravilha.Models;
using Microsoft.EntityFrameworkCore;

namespace Hotel_Maravilha.Data
{
    public class ApiContext:DbContext
    {
        public DbSet<HotelBooking> Bookings { get; set; }
        public ApiContext(DbContextOptions<ApiContext> options):base(options) 
        {

        }
    }
}
