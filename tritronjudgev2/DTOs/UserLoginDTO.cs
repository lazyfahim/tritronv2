﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace tritronAPI.DTOs
{
    public class UserLoginDTO
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "User name is required")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "UserName should be between 4 chars to 20 chars")]
        public string UserName { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "PassWord name is required")]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Password should be between 4 chars to 20 chars")]
        public string PassWord { get; set; }
    }
}
