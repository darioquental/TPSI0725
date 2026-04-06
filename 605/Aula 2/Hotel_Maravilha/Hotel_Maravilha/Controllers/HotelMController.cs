using Microsoft.AspNetCore.Mvc;
using Hotel_Maravilha.Models;
using Hotel_Maravilha.Data;

namespace Hotel_Maravilha.Controllers
{
    [Route("/api")]
    [ApiController]
    public class HotelMController : Controller
    {
        private readonly ApiContext _context;

        public HotelMController (ApiContext context)
        {
            _context= context;
        }

        [HttpPost("/CreateEdit")]
        public JsonResult CreateEdit(HotelBooking booking)
        {
            if (booking.Id == 0)
            {
                _context.Bookings.Add(booking);
            }
            else
            {
                var BookingInDb = _context.Bookings.Find(booking.Id);
                if (BookingInDb == null)
                {
                    return new JsonResult(NotFound());
                }
                BookingInDb = booking;
            }
            _context.SaveChanges();
            return new JsonResult(Ok(booking));
        }
        [HttpGet("/Get")]
        public JsonResult Get(int id)
        {
            var result =_context.Bookings.Find(id);
            if (result == null)
            {
                return new JsonResult(NotFound());
            }

            return new JsonResult(Ok(result));
        }

        [HttpDelete("/Delete")]
        public JsonResult Delete(int id)
        {
            var result = _context.Bookings.Find(id);
            if (result == null)
            {
                return new JsonResult(NotFound());
            }
            _context.Bookings.Remove(result);
            _context.SaveChanges();

            return new JsonResult(NoContent());
        }

        [HttpGet("/GetAll")]
        public JsonResult GetAll()
        {
            var result = _context.Bookings.ToList();
            return new JsonResult(Ok(result));
        }

        [HttpGet("/GetImposter")]
        public JsonResult GetImposter()
        {
            return new JsonResult(Ok());
        }
    }
}