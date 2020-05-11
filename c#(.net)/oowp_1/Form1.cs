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

namespace oowp_1
{
    public partial class Form1 : Form
    {
        ArrayList ar; // ArrayList 'ar'
        public Form1()
        {
            InitializeComponent();
            ar = new ArrayList();  // ar
        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            Random Random = new Random(); // 

            if (e.Button == MouseButtons.Left) //
            {
                CMyData c = new CMyData(); //
                c.Shape = (int)Random.Next(2); // 0  or 1  교재 p.388
                c.Size = (int)Random.Next(50, 200); // 50-199
                c.Point = new Point(e.X, e.Y); // 
                c.bColor = Color.FromArgb(Random.Next(256), Random.Next(256), Random.Next(256)); //r,g,b 255 
                c.pColor = Color.FromArgb(Random.Next(256), Random.Next(256), Random.Next(256));  // r,g,b 255 
                ar.Add(c); // CMydata

            }
            Invalidate(); // paint
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            foreach (CMyData c in ar) // P.155
            {
                SolidBrush brc = new SolidBrush(c.bColor); // brc  P.660
                Pen p = new Pen(c.pColor); // p P.671 
                if (c.Shape == 1) // 
                {
                    e.Graphics.DrawEllipse(p, c.Point.X, c.Point.Y, c.Size, c.Size); // 
                    e.Graphics.FillEllipse(brc, c.Point.X, c.Point.Y, c.Size, c.Size); // 
                }
                else
                {
                    e.Graphics.DrawRectangle(p, c.Point.X, c.Point.Y, c.Size, c.Size);
                    e.Graphics.FillRectangle(brc, c.Point.X, c.Point.Y, c.Size, c.Size);
                }
            }

        }
    }
    public class CMyData // p.210 
    {
        private Point point;//
        private Color penCol;//
        private Color brushCol;//
        private int size, shape;//

        public Color pColor//
        {
            get { return penCol; }  // Rvalue 
            set { penCol = value; } // Lvalue
        }
        public Color bColor//
        {
            get { return brushCol; }
            set { brushCol = value; }
        }
        public Point Point//
        {
            get { return point; }
            set { point = value; }
        }
        public int Size// 
        {
            get { return size; }
            set { size = value; }
        }
        public int Shape//
        {
            get { return shape; }
            set { shape = value; }
        }
    }
}
