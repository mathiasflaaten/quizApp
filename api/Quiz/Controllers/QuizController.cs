using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Quiz.Models;
using Quiz.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace Quiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAnyOrigin")]
    public class QuizController : ControllerBase
    {

        public List<QuizItem> _quizes = QuizData._quizes;

        public int GetRandomQuizNumber()
        {
            return new Random().Next(_quizes.Count);
        }

        [HttpGet]
        public IActionResult Gets()
        {
            if(_quizes.Count == 0)
            {
                return NotFound("No List found");

            }

            return Ok(_quizes); 
        }

        [HttpGet("GetQuiz")]
        public IActionResult Get(long id)
        {
            var quiz = _quizes.SingleOrDefault(x => x.Id == id); 
            if(quiz == null)
            {
                return NotFound("No Quiz Found"); 
            }
            return Ok(quiz); 
        }

        [HttpGet("RandomQuiz")]
        public IActionResult Get()
        {
            if(_quizes.Count == 0)
            {
                return NotFound("No more Quizes");
            }
            var quiz = _quizes[GetRandomQuizNumber()];
            DeleteQuiz(quiz.Id);
            return Ok(quiz);
        }

        [HttpDelete]
        public IActionResult DeleteQuiz(long id)
        {
            var quiz = _quizes.SingleOrDefault(x => x.Id == id);
            if(quiz == null)
            {
                return NotFound("No Quiz by that ID"); 
            }
            _quizes.Remove(quiz);

            return Ok(_quizes); 
        }

    }
}
