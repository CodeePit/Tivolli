import { SectionVideoStyle } from './style';

const SectionVideo = () => {
  return (
    <SectionVideoStyle>
      <h1>
        É por aqui que passa <span>o futuro da cidade!</span>
      </h1>
      <div className="video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/cmEf2nqt9P0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </SectionVideoStyle>
  );
};

export default SectionVideo;
