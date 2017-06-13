using System;

namespace YuvalBook.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Picture { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Country { get; set; }
        public string FamilyStatus { get; set; }
    }
}
