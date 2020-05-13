using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Collections;

namespace MyCurve
{
    public partial class Form1 : Form
    {
        private LinkedList<CMyData> total_lines;
        private int x, y;
        private CMyData c;
           
        public Form1()
        {
            total_lines = new LinkedList<CMyData>();
            InitializeComponent();
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            foreach (CMyData line in total_lines)
            {
                for (int i = 1; i < line.AR.Count; i++)
                {
                    e.Graphics.DrawLine(new Pen(line.Color, line.Width), (Point)line.AR[i - 1], (Point)line.AR[i]);
                }
               
            }
           
        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            Random Random = new Random();
            if (e.Button == MouseButtons.Left)
            {
                c = new CMyData();
                c.Color = Color.FromArgb(Random.Next(256), Random.Next(256), Random.Next(256));
                c.Width = Random.Next(1, 10);
                x = e.X; //선객체 하나의 시작점
                y = e.Y;
                c.AR.Add(new Point(x, y));
            }
        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            if (Capture && e.Button == MouseButtons.Left)
            {
                Graphics G = CreateGraphics();
                G.DrawLine(new Pen(c.Color, c.Width), x, y, e.X, e.Y);
                x = e.X;
                y = e.Y;
                c.AR.Add(new Point(x, y));
                G.Dispose();
            }
        }

        private void Form1_MouseUp(object sender, MouseEventArgs e)
        {
            total_lines.AddLast(c);
        }

        private void Form1_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == '\b')
            {
                total_lines.RemoveLast();
                Invalidate();
            }
        }

       
    }
    class CMyData
    {
        //  private Color color;
        //  private int width;
        private ArrayList Ar;

        public CMyData()  //생성자함수
        {
            Ar = new ArrayList();
        }
        public Color Color // 속성정의
        {
            get;
            set;
        }
        public int Width
        {
            get;
            set;
        }
        public ArrayList AR
        {
            get { return Ar; }
        }
    }
    
}
