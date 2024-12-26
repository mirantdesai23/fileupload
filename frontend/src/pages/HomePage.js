import React, { useState, useEffect } from 'react';
import API from '../utils/api';
import UploadForm from '../components/UploadForm';
import FileList from '../components/FileList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    try {
      const { data } = await API.get('/files');
      setFiles(data.files);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleFileUpload = (newFile) => {
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const handleSearch = async (query) => {
    try {
      const { data } = await API.get('/files', { params: { query } });
      setFiles(data.files);
    } catch (error) {
      console.error('Error searching files:', error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <UploadForm onFileUpload={handleFileUpload} />
      <SearchBar onSearch={handleSearch} />
      <FileList files={files} />
    </div>
  );
};

export default HomePage;

