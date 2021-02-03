using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Models
{
    public class QuizItem
    {

        public long Id { get; set; }
        public string Question { get; set; }
        public string[] Choices { get; set; }
        public int Answer { get; set; }
    }
}
