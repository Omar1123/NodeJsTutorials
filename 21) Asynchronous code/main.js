const _this = this;
       let queryException = _this.formatQueryException(fields, filter, groupBy);

formatQueryException(fields, filter, groupBy) {
       let where = filter ? `  WHERE  ${filter}` : '';
       let group = groupBy ? ` GROUP BY ${groupBy} ` : '';
       return `SELECT
                  ${fields}
                FROM MPES_EXCEPTION
                INNER JOIN MPES_EXCEPTIONMESSAGE  ON MPES_EXCEPTION.UUIDEXCEPTION = MPES_EXCEPTIONMESSAGE.UUIDEXCEPTION
                INNER JOIN MP_Config..MP_SERVICE  ON MPES_EXCEPTIONMESSAGE.UUIDSERVICE = CONVERT(VARCHAR(36), MP_SERVICE.UUID) COLLATE SQL_Latin1_General_CP1_CI_AS
                INNER JOIN MP_Config..MP_SERVICEBYSERVER ON MP_SERVICE.UUID = MP_SERVICEBYSERVER.UUIDSERVICE
                INNER JOIN MP_Config..MP_SERVER  ON MP_SERVICEBYSERVER.UUIDSERVER = MP_SERVER.UUID
                 ${where}
                 ${group}`;
       // GROUP BY  MP_SERVER.NAME , MP_SERVER.UUID
   };