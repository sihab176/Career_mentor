// "use client"

// import { useState } from 'react';

// const ResumeAnalyzer = () => {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile && selectedFile.type === 'application/pdf') {
//       setFile(selectedFile);
//       setError(null);
//     } else {
//       setError('Please select a valid PDF file');
//       setFile(null);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!file) {
//       setError('Please select a PDF file');
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setResult(null);

//     const formData = new FormData();
//     formData.append('resume', file);
   
//     console.log('Sending resume for analysis:', file.name);
//     try {
//       const response = await fetch('/api/analyze-resume-agent', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult(data);
//       } else {
//         setError(data.error || 'Failed to analyze resume');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
//         Resume Analyzer
//       </h1>

//       <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
//         <div style={{ 
//           border: '2px dashed #ccc', 
//           borderRadius: '8px', 
//           padding: '40px',
//           textAlign: 'center',
//           marginBottom: '20px'
//         }}>
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleFileChange}
//             style={{ marginBottom: '10px' }}
//           />
//           {file && (
//             <p style={{ color: 'green', marginTop: '10px' }}>
//               Selected: {file.name}
//             </p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={!file || loading}
//           style={{
//             width: '100%',
//             padding: '15px',
//             fontSize: '16px',
//             backgroundColor: loading ? '#ccc' : '#0070f3',
//             color: 'white',
//             border: 'none',
//             borderRadius: '8px',
//             cursor: loading ? 'not-allowed' : 'pointer',
//           }}
//         >
//           {loading ? 'Analyzing...' : 'Analyze Resume'}
//         </button>
//       </form>

//       {error && (
//         <div style={{
//           padding: '15px',
//           backgroundColor: '#fee',
//           color: '#c33',
//           borderRadius: '8px',
//           marginBottom: '20px'
//         }}>
//           {error}
//         </div>
//       )}

//       {result && (
//         <div style={{
//           border: '1px solid #ddd',
//           borderRadius: '8px',
//           padding: '20px',
//           backgroundColor: '#f9f9f9'
//         }}>
//           <h2 style={{ marginBottom: '20px' }}>Analysis Result</h2>
          
//           <div style={{
//             backgroundColor: 'white',
//             padding: '15px',
//             borderRadius: '8px',
//             marginBottom: '15px'
//           }}>
//             <h3>Resume Preview</h3>
//             <p style={{ fontSize: '14px', color: '#666' }}>
//               {result.resumeText}
//             </p>
//           </div>

//           <div style={{
//             backgroundColor: 'white',
//             padding: '15px',
//             borderRadius: '8px',
//             whiteSpace: 'pre-wrap'
//           }}>
//             <h3>AI Analysis</h3>
//             <div style={{ lineHeight: '1.6' }}>
//               {result.analysis}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ResumeAnalyzer;


// todo : this is workin text -----------------------
"use client";
import { useState } from 'react';

export default function ResumeAnalyzer() {
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/analyze-resume-agent', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log("result resume",result)
      setExtractedText(result.text); // এখানে আপনার টেক্সট চলে আসবে
    } catch (error) {
      console.error("Error extracting text:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      {loading && <p>Processing Resume...</p>}
      
      <div className="mt-5">
        <h3 className="font-bold">Extracted Text:</h3>
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 border">
          {extractedText}
        </pre>
      </div>
    </div>
  );
}