
const currentYear = new Date().getFullYear();

const publications = [
  
 {
    title: 'Manna Feast — January 2026',
    month: 'January',
    year: 2026,
    cover: 'covers/manna-feast-2026-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2026',
    month: 'February',
    year: 2026,
    cover: 'covers/manna-feast-2026-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — March 2026',
    month: 'March',
    year: 2026,
    cover: 'covers/manna-feast-2026-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2026',
    month: 'April',
    year: 2026,
    cover: 'covers/manna-feast-2026-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2026',
    month: 'May',
    year: 2026,
    cover: 'covers/manna-feast-2026-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2026',
    month: 'June',
    year: 2026,
    cover: 'covers/manna-feast-2026-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2026',
    month: 'July',
    year: 2026,
    cover: 'covers/manna-feast-2026-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2026',
    month: 'August',
    year: 2026,
    cover: 'covers/manna-feast-2026-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2026',
    month: 'September',
    year: 2026,
    cover: 'covers/manna-feast-2026-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2026.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — January 2025',
    month: 'January',
    year: 2025,
    cover: 'covers/manna-feast-2025-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2025',
    month: 'February',
    year: 2025,
    cover: 'covers/manna-feast-2025-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2025.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2025',
    month: 'March',
    year: 2025,
    cover: 'covers/manna-feast-2025-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2025',
    month: 'April',
    year: 2025,
    cover: 'covers/manna-feast-2025-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2025',
    month: 'May',
    year: 2025,
    cover: 'covers/manna-feast-2025-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2025',
    month: 'June',
    year: 2025,
    cover: 'covers/manna-feast-2025-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2025',
    month: 'July',
    year: 2025,
    cover: 'covers/manna-feast-2025-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2025',
    month: 'August',
    year: 2025,
    cover: 'covers/manna-feast-2025-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2025',
    month: 'September',
    year: 2025,
    cover: 'covers/manna-feast-2025-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2025',
    month: 'October',
    year: 2025,
    cover: 'covers/manna-feast-2025-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2025',
    month: 'November',
    year: 2025,
    cover: 'covers/manna-feast-2025-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2025',
    month: 'December',
    year: 2025,
    cover: 'covers/manna-feast-2025-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2025.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — January 2024',
    month: 'January',
    year: 2024,
    cover: 'covers/manna-feast-2024-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2024',
    month: 'February',
    year: 2024,
    cover: 'covers/manna-feast-2024-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2024.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2024',
    month: 'March',
    year: 2024,
    cover: 'covers/manna-feast-2024-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2024',
    month: 'April',
    year: 2024,
    cover: 'covers/manna-feast-2024-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2024',
    month: 'May',
    year: 2024,
    cover: 'covers/manna-feast-2024-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2024',
    month: 'June',
    year: 2024,
    cover: 'covers/manna-feast-2024-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2024',
    month: 'July',
    year: 2024,
    cover: 'covers/manna-feast-2024-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2024',
    month: 'August',
    year: 2024,
    cover: 'covers/manna-feast-2024-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2024.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — January 2023',
    month: 'January',
    year: 2023,
    cover: 'covers/manna-feast-2023-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2023',
    month: 'February',
    year: 2023,
    cover: 'covers/manna-feast-2023-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2023.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2023',
    month: 'March',
    year: 2023,
    cover: 'covers/manna-feast-2023-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2023',
    month: 'April',
    year: 2023,
    cover: 'covers/manna-feast-2023-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2023',
    month: 'May',
    year: 2023,
    cover: 'covers/manna-feast-2023-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2023',
    month: 'June',
    year: 2023,
    cover: 'covers/manna-feast-2023-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2023',
    month: 'July',
    year: 2023,
    cover: 'covers/manna-feast-2023-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2023',
    month: 'August',
    year: 2023,
    cover: 'covers/manna-feast-2023-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  { 
    title: 'Manna Feast — September 2023',
    month: 'September',
    year: 2023,
    cover: 'covers/manna-feast-2023-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2023',
    month: 'October',
    year: 2023,
    cover: 'covers/manna-feast-2023-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2023',
    month: 'November',
    year: 2023,
    cover: 'covers/manna-feast-2023-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2023',
    month: 'December',
    year: 2023,
    cover: 'covers/manna-feast-2023-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2023.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — January 2022',
    month: 'January',
    year: 2022,
    cover: 'covers/manna-feast-2022-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2022',
    month: 'February',
    year: 2022,
    cover: 'covers/manna-feast-2022-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2022.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2022',
    month: 'March',
    year: 2022,
    cover: 'covers/manna-feast-2022-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2022',
    month: 'April',
    year: 2022,
    cover: 'covers/manna-feast-2022-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2022',
    month: 'May',
    year: 2022,
    cover: 'covers/manna-feast-2022-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2022',
    month: 'June',
    year: 2022,
    cover: 'covers/manna-feast-2022-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2022',
    month: 'July',
    year: 2022,
    cover: 'covers/manna-feast-2022-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2022',
    month: 'August',
    year: 2022,
    cover: 'covers/manna-feast-2022-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2022',
    month: 'September',
    year: 2022,
    cover: 'covers/manna-feast-2022-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2022',
    month: 'October',
    year: 2022,
    cover: 'covers/manna-feast-2022-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2022',
    month: 'November',
    year: 2022,
    cover: 'covers/manna-feast-2022-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2022',
    month: 'December',
    year: 2022,
    cover: 'covers/manna-feast-2022-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2022.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — January 2021',
    month: 'January',
    year: 2021,
    cover: 'covers/manna-feast-2021-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2021',
    month: 'February',
    year: 2021,
    cover: 'covers/manna-feast-2021-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2021.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2021',
    month: 'March',
    year: 2021,
    cover: 'covers/manna-feast-2021-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2021',
    month: 'April',
    year: 2021,
    cover: 'covers/manna-feast-2021-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2021',
    month: 'May',
    year: 2021,
    cover: 'covers/manna-feast-2021-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2021',
    month: 'June',
    year: 2021,
    cover: 'covers/manna-feast-2021-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2021',
    month: 'July',
    year: 2021,
    cover: 'covers/manna-feast-2021-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2021',
    month: 'August',
    year: 2021,
    cover: 'covers/manna-feast-2021-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2021',
    month: 'September',
    year: 2021,
    cover: 'covers/manna-feast-2021-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2021',
    month: 'October',
    year: 2021,
    cover: 'covers/manna-feast-2021-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2021',
    month: 'November',
    year: 2021,
    cover: 'covers/manna-feast-2021-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2021',
    month: 'December',
    year: 2021,
    cover: 'covers/manna-feast-2021-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2021.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
   {
    title: 'Manna Feast — January 2020',
    month: 'January',
    year: 2020,
    cover: 'covers/manna-feast-2020-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2020',
    month: 'February',
    year: 2020,
    cover: 'covers/manna-feast-2020-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2020.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2020',
    month: 'March',
    year: 2020,
    cover: 'covers/manna-feast-2020-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2020',
    month: 'April',
    year: 2020,
    cover: 'covers/manna-feast-2020-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2020',
    month: 'May',
    year: 2020,
    cover: 'covers/manna-feast-2020-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2020',
    month: 'June',
    year: 2020,
    cover: 'covers/manna-feast-2020-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2020',
    month: 'July',
    year: 2020,
    cover: 'covers/manna-feast-2020-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2020',
    month: 'August',
    year: 2020,
    cover: 'covers/manna-feast-2020-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2020',
    month: 'September',
    year: 2020,
    cover: 'covers/manna-feast-2020-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2020',
    month: 'October',
    year: 2020,
    cover: 'covers/manna-feast-2020-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2020',
    month: 'November',
    year: 2020,
    cover: 'covers/manna-feast-2020-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2020',
    month: 'December',
    year: 2020,
    cover: 'covers/manna-feast-2020-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2020.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
   {
    title: 'Manna Feast — January 2019',
    month: 'January',
    year: 2019,
    cover: 'covers/manna-feast-2019-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2019',
    month: 'February',
    year: 2019,
    cover: 'covers/manna-feast-2019-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2019.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2019',
    month: 'March',
    year: 2019,
    cover: 'covers/manna-feast-2019-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2019',
    month: 'April',
    year: 2019,
    cover: 'covers/manna-feast-2019-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2019',
    month: 'May',
    year: 2019,
    cover: 'covers/manna-feast-2019-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2019',
    month: 'June',
    year: 2019,
    cover: 'covers/manna-feast-2019-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2019',
    month: 'July',
    year: 2019,
    cover: 'covers/manna-feast-2019-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2019',
    month: 'August',
    year: 2019,
    cover: 'covers/manna-feast-2019-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2019',
    month: 'September',
    year: 2019,
    cover: 'covers/manna-feast-2019-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2019',
    month: 'October',
    year: 2019,
    cover: 'covers/manna-feast-2019-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2019',
    month: 'November',
    year: 2019,
    cover: 'covers/manna-feast-2019-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2019',
    month: 'December',
    year: 2019,
    cover: 'covers/manna-feast-2019-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2019.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
   {
    title: 'Manna Feast — January 2018',
    month: 'January',
    year: 2018,
    cover: 'covers/manna-feast-2018-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2018',
    month: 'February',
    year: 2018,
    cover: 'covers/manna-feast-2018-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2018.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2018',
    month: 'March',
    year: 2018,
    cover: 'covers/manna-feast-2018-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2018',
    month: 'April',
    year: 2018,
    cover: 'covers/manna-feast-2018-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2018',
    month: 'May',
    year: 2018,
    cover: 'covers/manna-feast-2018-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2018',
    month: 'June',
    year: 2018,
    cover: 'covers/manna-feast-2018-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2018',
    month: 'July',
    year: 2018,
    cover: 'covers/manna-feast-2018-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2018',
    month: 'August',
    year: 2018,
    cover: 'covers/manna-feast-2018-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2018',
    month: 'September',
    year: 2018,
    cover: 'covers/manna-feast-2018-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2018',
    month: 'October',
    year: 2018,
    cover: 'covers/manna-feast-2018-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2018',
    month: 'November',
    year: 2018,
    cover: 'covers/manna-feast-2018-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2018',
    month: 'December',
    year: 2018,
    cover: 'covers/manna-feast-2018-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2018.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
   {
    title: 'Manna Feast — January 2017',
    month: 'January',
    year: 2017,
    cover: 'covers/manna-feast-2017-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2017',
    month: 'February',
    year: 2017,
    cover: 'covers/manna-feast-2017-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2017.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2017',
    month: 'March',
    year: 2017,
    cover: 'covers/manna-feast-2017-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2017',
    month: 'April',
    year: 2017,
    cover: 'covers/manna-feast-2017-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2017',
    month: 'May',
    year: 2017,
    cover: 'covers/manna-feast-2017-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2017',
    month: 'June',
    year: 2017,
    cover: 'covers/manna-feast-2017-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2017',
    month: 'July',
    year: 2017,
    cover: 'covers/manna-feast-2017-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2017',
    month: 'August',
    year: 2017,
    cover: 'covers/manna-feast-2017-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2017',
    month: 'September',
    year: 2017,
    cover: 'covers/manna-feast-2017-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2017',
    month: 'October',
    year: 2017,
    cover: 'covers/manna-feast-2017-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2017',
    month: 'November',
    year: 2017,
    cover: 'covers/manna-feast-2017-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2017',
    month: 'December',
    year: 2017,
    cover: 'covers/manna-feast-2017-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2017.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
   {
    title: 'Manna Feast — January 2016',
    month: 'January',
    year: 2016,
    cover: 'covers/manna-feast-2016-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2016',
    month: 'February',
    year: 2016,
    cover: 'covers/manna-feast-2016-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2016.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2016',
    month: 'March',
    year: 2016,
    cover: 'covers/manna-feast-2016-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2016',
    month: 'April',
    year: 2016,
    cover: 'covers/manna-feast-2016-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2016',
    month: 'May',
    year: 2016,
    cover: 'covers/manna-feast-2016-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2016',
    month: 'June',
    year: 2016,
    cover: 'covers/manna-feast-2016-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2016',
    month: 'July',
    year: 2016,
    cover: 'covers/manna-feast-2016-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2016',
    month: 'August',
    year: 2016,
    cover: 'covers/manna-feast-2016-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2016',
    month: 'September',
    year: 2016,
    cover: 'covers/manna-feast-2016-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2016',
    month: 'October',
    year: 2016,
    cover: 'covers/manna-feast-2016-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2016',
    month: 'November',
    year: 2016,
    cover: 'covers/manna-feast-2016-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2016',
    month: 'December',
    year: 2016,
    cover: 'covers/manna-feast-2016-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2016.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
 
   {
    title: 'Manna Feast — January 2015',
    month: 'January',
    year: 2015,
    cover: 'covers/manna-feast-2015-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2015',
    month: 'February',
    year: 2015,
    cover: 'covers/manna-feast-2015-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2015.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2015',
    month: 'March',
    year: 2015,
    cover: 'covers/manna-feast-2015-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2015',
    month: 'April',
    year: 2015,
    cover: 'covers/manna-feast-2015-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2015',
    month: 'May',
    year: 2015,
    cover: 'covers/manna-feast-2015-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2015',
    month: 'June',
    year: 2015,
    cover: 'covers/manna-feast-2015-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2015',
    month: 'July',
    year: 2015,
    cover: 'covers/manna-feast-2015-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2015',
    month: 'August',
    year: 2015,
    cover: 'covers/manna-feast-2015-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2015',
    month: 'September',
    year: 2015,
    cover: 'covers/manna-feast-2015-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2015',
    month: 'October',
    year: 2015,
    cover: 'covers/manna-feast-2015-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2015',
    month: 'November',
    year: 2015,
    cover: 'covers/manna-feast-2015-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2015',
    month: 'December',
    year: 2015,
    cover: 'covers/manna-feast-2015-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2015.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
   {
    title: 'Manna Feast — January 2014',
    month: 'January',
    year: 2014,
    cover: 'covers/manna-feast-2014-january-cover.jpg',
    pdf: 'pdfs/manna-feast-january-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — February 2014',
    month: 'February',
    year: 2014,
    cover: 'covers/manna-feast-2014-february-cover.jpg',
    pdf: 'pdfs/manna-feast-february-2014.pdf',
    description: 'Another sample issue included so you can test how the archive should work.',
    available: true
  },
  {
    title: 'Manna Feast — March 2014',
    month: 'March',
    year: 2014,
    cover: 'covers/manna-feast-2014-march-cover.jpg',
    pdf: 'pdfs/manna-feast-march-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — April 2014',
    month: 'April',
    year: 2014,
    cover: 'covers/manna-feast-2014-april-cover.jpg',
    pdf: 'pdfs/manna-feast-april-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — May 2014',
    month: 'May',
    year: 2014,
    cover: 'covers/manna-feast-2014-may-cover.jpg',
    pdf: 'pdfs/manna-feast-may-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — June 2014',
    month: 'June',
    year: 2014,
    cover: 'covers/manna-feast-2014-june-cover.jpg',
    pdf: 'pdfs/manna-feast-june-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — July 2014',
    month: 'July',
    year: 2014,
    cover: 'covers/manna-feast-2014-july-cover.jpg',
    pdf: 'pdfs/manna-feast-july-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — August 2014',
    month: 'August',
    year: 2014,
    cover: 'covers/manna-feast-2014-august-cover.jpg',
    pdf: 'pdfs/manna-feast-august-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — September 2014',
    month: 'September',
    year: 2014,
    cover: 'covers/manna-feast-2014-september-cover.jpg',
    pdf: 'pdfs/manna-feast-september-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — October 2014',
    month: 'October',
    year: 2014,
    cover: 'covers/manna-feast-2014-october-cover.jpg',
    pdf: 'pdfs/manna-feast-october-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — November 2014',
    month: 'November',
    year: 2014,
    cover: 'covers/manna-feast-2014-november-cover.jpg',
    pdf: 'pdfs/manna-feast-november-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — December 2014',
    month: 'December',
    year: 2014,
    cover: 'covers/manna-feast-2014-december-cover.jpg',
    pdf: 'pdfs/manna-feast-december-2014.pdf',
    description: 'Sample live issue included in this starter library. Read online or download the PDF.',
    available: true
  },
  {
    title: 'Manna Feast — Future or Recovered Issue',
    month: 'Add Month',
    year: 2024,
    cover: 'covers/placeholder.svg',
    pdf: '#',
    description: 'Use this as a model while adding more recovered publications and cover images later.',
    available: false
  }
];

const searchInput = document.getElementById('searchInput');
const yearSelect = document.getElementById('yearSelect');
const cardsGrid = document.getElementById('cardsGrid');
const resultInfo = document.getElementById('resultInfo');
const emptyState = document.getElementById('emptyState');
const yearChipRow = document.getElementById('yearChipRow');

const minimumYear = 2014;
const allYears = [];
for (let y = currentYear; y >= minimumYear; y--) {
  allYears.push(y);
}

function buildYearSelect() {
  yearSelect.innerHTML = '<option value="all">All years</option>' +
    allYears.map(year => `<option value="${year}">${year}</option>`).join('');
}

function buildYearChips() {
  yearChipRow.innerHTML = '';
  const allButton = document.createElement('button');
  allButton.className = 'year-chip active';
  allButton.textContent = 'All';
  allButton.dataset.year = 'all';
  yearChipRow.appendChild(allButton);

  allYears.forEach(year => {
    const btn = document.createElement('button');
    btn.className = 'year-chip';
    btn.textContent = year;
    btn.dataset.year = String(year);
    yearChipRow.appendChild(btn);
  });

  yearChipRow.addEventListener('click', (event) => {
    const button = event.target.closest('.year-chip');
    if (!button) return;

    document.querySelectorAll('.year-chip').forEach(chip => chip.classList.remove('active'));
    button.classList.add('active');
    yearSelect.value = button.dataset.year;
    renderCards();
  });
}

function cardTemplate(item) {
  const readButton = item.available
    ? `<a class="read-link" href="${item.pdf}" target="_blank" rel="noopener noreferrer">Read Online</a>`
    : '';

  const downloadButton = item.available
    ? `<a class="download-link" href="${item.pdf}" download>Download PDF</a>`
    : `<span class="download-link">Cover / PDF to be added</span>`;

  return `
    <article class="issue-card">
      <div class="cover-frame">
        <img src="${item.cover}" alt="${item.title}">
      </div>
      <div class="issue-body">
        <div class="issue-meta">${item.month.toUpperCase()} • ${item.year}</div>
        <h3 class="issue-title">${item.title}</h3>
        <p class="issue-description">${item.description}</p>
        <div class="issue-actions">
          ${readButton}
          ${downloadButton}
        </div>
      </div>
    </article>
  `;
}

function getFilteredItems() {
  const selectedYear = yearSelect.value;
  const search = searchInput.value.trim().toLowerCase();

  return publications.filter(item => {
    const yearMatch = selectedYear === 'all' || String(item.year) === selectedYear;
    const text = `${item.title} ${item.month} ${item.year}`.toLowerCase();
    const searchMatch = !search || text.includes(search);
    return yearMatch && searchMatch;
  }).sort((a, b) => b.year - a.year);
}

function renderCards() {
  const items = getFilteredItems();
  cardsGrid.innerHTML = items.map(cardTemplate).join('');

  if (items.length === 0) {
    emptyState.classList.remove('hidden');
    resultInfo.textContent = '0 issues found';
  } else {
    emptyState.classList.add('hidden');
    resultInfo.textContent = `${items.length} issue${items.length === 1 ? '' : 's'} found`;
  }
}

buildYearSelect();
buildYearChips();
renderCards();

searchInput.addEventListener('input', renderCards);
yearSelect.addEventListener('change', () => {
  const selectedValue = yearSelect.value;
  document.querySelectorAll('.year-chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.year === selectedValue);
  });
  renderCards();
});
const themeButtons = document.querySelectorAll('[data-theme]');

themeButtons.forEach(button => {
  button.addEventListener('click', () => {

    document.body.classList.remove(
      'theme-forest',
      'theme-cream',
      'theme-blue'
    );

    if (button.dataset.theme === 'forest') {
      document.body.classList.add('theme-forest');
    }

    if (button.dataset.theme === 'cream') {
      document.body.classList.add('theme-cream');
    }

    if (button.dataset.theme === 'blue') {
      document.body.classList.add('theme-blue');
    }
  });
});
// FEATURED ISSUE ROTATION

const featuredCover = document.getElementById('featuredCover');
const featuredTitle = document.getElementById('featuredTitle');
const featuredDescription = document.getElementById('featuredDescription');

// Only use publications that are actually available
const featuredPublications = publications.filter(
  publication => publication.available === true
);

let featuredIndex = 0;

function showFeaturedIssue() {

  if (featuredPublications.length === 0) {
    return;
  }

  const issue = featuredPublications[featuredIndex];

  featuredCover.src = issue.cover;
  featuredCover.alt = issue.title;

  featuredTitle.textContent = issue.title;

  featuredDescription.textContent =
    issue.description || 'Monthly Manna Feast publication.';

  featuredIndex++;

  if (featuredIndex >= featuredPublications.length) {
    featuredIndex = 0;
  }
}

// Show the first issue immediately
showFeaturedIssue();

// Change issue every 30 seconds
setInterval(showFeaturedIssue, 30000);

// HOME SCRIPTURE WIDGET — APPROVED HOMEPAGE
const homeScriptures = [
  {
    text: '“Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.”',
    reference: 'Matthew 4:4 (KJV)'
  },
  {
    text: '“Thy word is a lamp unto my feet, and a light unto my path.”',
    reference: 'Psalm 119:105 (KJV)'
  },
  {
    text: '“Thy word have I hid in mine heart, that I might not sin against thee.”',
    reference: 'Psalm 119:11 (KJV)'
  },
  {
    text: '“This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.”',
    reference: 'Joshua 1:8 (KJV)'
  },
  {
    text: '“For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.”',
    reference: 'Hebrews 4:12 (KJV)'
  },
  {
    text: '“But be ye doers of the word, and not hearers only, deceiving your own selves.”',
    reference: 'James 1:22 (KJV)'
  }
];

const scriptureWidget = document.getElementById('scriptureWidget');

if (scriptureWidget) {
  const scriptureText = document.getElementById('scriptureText');
  const scriptureReference = document.getElementById('scriptureReference');
  const scriptureDots = document.getElementById('scriptureDots');
  const scriptureStage = scriptureWidget.querySelector('.scripture-stage');

  let scriptureIndex = 0;
  let scriptureTimer = null;
  let scriptureResumeTimer = null;

  function buildScriptureDots() {
    scriptureDots.innerHTML = '';

    homeScriptures.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'scripture-dot';
      dot.setAttribute('aria-label', `Show scripture ${index + 1}`);

      dot.addEventListener('click', () => {
        pauseScriptureRotation();
        showScripture(index);
      });

      scriptureDots.appendChild(dot);
    });
  }

  function showScripture(index) {
    scriptureStage.classList.add('is-fading');

    setTimeout(() => {
      scriptureIndex = (index + homeScriptures.length) % homeScriptures.length;
      scriptureText.textContent = homeScriptures[scriptureIndex].text;
      scriptureReference.textContent = `— ${homeScriptures[scriptureIndex].reference}`;

      document.querySelectorAll('.scripture-dot').forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === scriptureIndex);
      });

      scriptureStage.classList.remove('is-fading');
    }, 180);
  }

  function startScriptureRotation() {
    clearInterval(scriptureTimer);
    scriptureTimer = setInterval(() => {
      showScripture(scriptureIndex + 1);
    }, 30000);
  }

  function pauseScriptureRotation() {
    clearInterval(scriptureTimer);
    clearTimeout(scriptureResumeTimer);
    scriptureResumeTimer = setTimeout(startScriptureRotation, 45000);
  }

  document.getElementById('scripturePrev').addEventListener('click', () => {
    pauseScriptureRotation();
    showScripture(scriptureIndex - 1);
  });

  document.getElementById('scriptureNext').addEventListener('click', () => {
    pauseScriptureRotation();
    showScripture(scriptureIndex + 1);
  });

  scriptureWidget.addEventListener('mouseenter', () => clearInterval(scriptureTimer));
  scriptureWidget.addEventListener('mouseleave', startScriptureRotation);
  scriptureWidget.addEventListener('focusin', () => clearInterval(scriptureTimer));
  scriptureWidget.addEventListener('focusout', startScriptureRotation);

  buildScriptureDots();
  showScripture(0);
  startScriptureRotation();
}
