const StatusLabel = ({ isValid }: { isValid: boolean }) => {
  return isValid ? (
    <div className="w-5 h-5 bg-green-500 rounded-full"></div>
  ) : (
    <div className="w-5 h-5 bg-red-500 rounded-full"></div>
  );
};

export default StatusLabel;
