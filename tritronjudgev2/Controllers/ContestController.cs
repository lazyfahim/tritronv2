﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Extension;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;
using tritronAPI.DTOs;
using Contracts;

namespace tritronAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContestController : ControllerBase
    {
        private IUnitOfWork _uow;
        private IMapper _mapper;

        public ContestController(IUnitOfWork uow,IMapper mapper)
        {
            this._uow = uow;
            this._mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> AddContest([FromBody] CreateContestDto contest)
        {
            var con = _mapper.Map<Contest>(contest);
            this._uow.ContestRepository.Add(con);
            _uow.Save();
            return Ok(new Contest() { Id = con.Id });
        }

        public async Task<IActionResult> Get(int pageNumber=1,int pageSize = 5)
        {
            ICollection<Contest> contests = _uow.ContestRepository.Find(pageNumber, pageSize).ToList();
            ContestListDto con = new ContestListDto();
            con.Contests = _mapper.Map<ICollection<Contest>, ICollection<ContestDtoForList>>(contests);
            con.Total = _uow.ContestRepository.GetCount();
            return Ok(value: con);
        }

        [HttpGet]
        [Route("type")]

        public async Task<IActionResult> ContestType()
        {
            return Ok(EnumExtensions.GetValues<ContestType>());
        }
        
    }
}